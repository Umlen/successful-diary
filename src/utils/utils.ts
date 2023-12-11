import { type CalendarType } from '../types/types';

const AMOUNT_OF_DISPLAYED_DAYS = 15;

export const getLocalStorageTheme = (): string => {
  const savedTheme = localStorage.getItem('SuccessDiaryTheme');

  if (savedTheme) {
    return savedTheme;
  }

  return 'light';
};

export const getCurrentDate = (): string => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = String(date.getFullYear()).slice(-2);

  return [day, month, year].join(' / ');
};

export const getDaysFromCalendar = (
  calendar: CalendarType[],
  calendarSeparator: number,
): CalendarType[] => {
  const sliceStart =
    calendar.length - calendarSeparator < 0
      ? 0
      : calendar.length - calendarSeparator;
  const sliceEnd = sliceStart + AMOUNT_OF_DISPLAYED_DAYS;
  return calendar.slice(sliceStart, sliceEnd);
};

export const checkCalendarSeparator = (
  calendarSeparator: number,
  calendarLength: number,
): { checkedIsStart: boolean; checkedIsEnd: boolean } => {
  if (calendarLength <= AMOUNT_OF_DISPLAYED_DAYS) {
    return { checkedIsStart: true, checkedIsEnd: true };
  }

  if (calendarSeparator >= calendarLength) {
    return { checkedIsStart: true, checkedIsEnd: false };
  }

  if (calendarSeparator === AMOUNT_OF_DISPLAYED_DAYS) {
    return { checkedIsStart: false, checkedIsEnd: true };
  }

  return { checkedIsStart: false, checkedIsEnd: false };
};

export const getDayById = (
  calendar: CalendarType[],
  id: string,
): CalendarType => {
  return calendar.filter((day) => day._id === id)[0];
};
