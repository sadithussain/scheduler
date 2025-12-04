export interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;

  desc?: string;
  color?: string;
  location?: string;
}
