"use client";

import {
  Calendar,
  EventProps,
  momentLocalizer,
  Views,
} from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { CalendarEvent } from "@/types/calendar.types";

const localizer = momentLocalizer(moment);

// Custom event component to display additional details
const CustomEvent = ({ event }: EventProps<CalendarEvent>) => {
  return (
    <div className="flex flex-col h-full">
      <span className="font-bold text-sm leading-tight">{event.title}</span>

      {/* Custom time formatting inside the event */}
      {!event.allDay && (
        <div className="text-[10px] mt-1">
          {isSamePeriod(event.start, event.end)
            ? `${moment(event.start).format("h:mm")} - ${moment(
                event.end
              ).format("h:mm A")}`
            : `${moment(event.start).format("h:mm A")} - ${moment(
                event.end
              ).format("h:mm A")}`}
        </div>
      )}

      {/*Location */}
      {event.location && (
        <div className="text-[10px] mt-1">📍 {event.location}</div>
      )}
    </div>
  );
};

const formats = {
  eventTimeRangeFormat: () => {
    return "";
  },
};

const isSamePeriod = (date1: Date, date2: Date) => {
  return moment(date1).format("A") === moment(date2).format("A");
};

interface FullCalendarProps {
  events: CalendarEvent[];
  height?: string;
  onSelectEvent?: (event: CalendarEvent) => void;
}

const FullCalendar = ({
  events,
  height = "500px",
  onSelectEvent,
}: FullCalendarProps) => {
  // Function to style events
  const eventStyleGetter = (event: CalendarEvent) => {
    const backgroundColor = event.color || "#3b82f6";

    return {
      style: {
        backgroundColor: backgroundColor,
        border: "none",
        borderRadius: "6px",
        color: "white",
        display: "block",
      },
    };
  };

  return (
    <div style={{ height: height }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView={Views.MONTH}
        views={[Views.MONTH, Views.WEEK, Views.DAY]}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CustomEvent,
        }}
        formats={formats}
        onSelectEvent={onSelectEvent}
      />
    </div>
  );
};

export default FullCalendar;
