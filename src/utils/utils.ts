import { type CalendarType } from '../types/types';

export const getCurrentDate = (): string => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = String(date.getFullYear()).slice(-2);

  return [day, month, year].join(' / ');
};

export const getDaysFromCalendar = (
  calendar: CalendarType[],
): CalendarType[] => {
  return calendar.length <= 15 ? calendar : calendar.slice(0, 15);
};
