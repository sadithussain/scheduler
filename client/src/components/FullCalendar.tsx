"use client";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { CalendarEvent } from "@/types/calendar.types";

const localizer = momentLocalizer(moment);

interface FullCalendarProps {
  events: CalendarEvent[];
  height?: string;
}

const FullCalendar = ({ events, height = "500px" }: FullCalendarProps) => {
  return (
    <div style={{ height: height }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView={Views.MONTH}
        views={[Views.MONTH, Views.WEEK, Views.DAY]}
      />
    </div>
  );
};

export default FullCalendar;
