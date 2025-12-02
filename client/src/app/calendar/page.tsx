import FullCalendar from "@/components/FullCalendar";
import { CalendarEvent } from "@/types/calendar.types";

const CalendarPage = () => {
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
        now.getHours() + 2
      ),
      desc: "If you see this, the calendar works!",
      color: "#ff0000", // Red (only visible if you set up eventPropGetter)
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

  return (
    <div>
      <FullCalendar events={myEvents} />
    </div>
  );
};

export default CalendarPage;
