"use client";

import { CalendarEvent } from "@/types/calendar.types";
import moment from "moment";

interface EventModalProps {
  event: CalendarEvent | null;
  onClose: () => void;
}

const isSamePeriod = (date1: Date, date2: Date) => {
  return moment(date1).format("A") === moment(date2).format("A");
};

const EventModal = ({ event, onClose }: EventModalProps) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 w-[400px] max-w-[90vw] p-6 pointer-events-auto relative">
        <div className="absolute top-3 right-3">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1 rounded-full transition"
          >
            ✕
          </button>
        </div>

        <div>
          <h2>{event.title}</h2>
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
          <p>{event.location}</p>
          <p>{event.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
