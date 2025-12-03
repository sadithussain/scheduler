"use client";

import EventModal from "@/components/EventModal";
import FullCalendar from "@/components/FullCalendar";
import { CalendarEvent } from "@/types/calendar.types";
import { useState } from "react";

const CalendarPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );

  const now = new Date();

  const myEvents: CalendarEvent[] = [
    // Temporary test events
    {
      title: "Debug Test Event",
      // Start: Right now
      start: now,
      // End: 2 hours from now
      end: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        now.getHours(),
        now.getMinutes() + 200
      ),
      desc: "If you see this, the calendar works!",
      location: "Localhost",
    },
    {
      title: "All Day Holiday",
      start: now,
      end: now,
      allDay: true, // Should appear in the top bar
      color: "#2ecc71", // Green
    },
  ];

  const handleSelectEvent = (event: CalendarEvent) => {
    setSelectedEvent(event);
  };

  return (
    <div>
      <FullCalendar
        events={myEvents}
        height="650px"
        onSelectEvent={handleSelectEvent}
      />
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
};

export default CalendarPage;
