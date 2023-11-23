import { type CalendarType } from '../types/types';

export const getCurrentDate = (): string => {
  const date = new Date();
  return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join(' / ');
};

export const getDaysFromCalendar = (
  calendar: CalendarType[],
): CalendarType[] => {
  return calendar.length <= 15 ? calendar : calendar.slice(0, 15);
};
