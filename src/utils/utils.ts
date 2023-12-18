import { type CalendarType } from '@Types/types';
import testData from '@Data/testCalendar.json';
import { AMOUNT_OF_DISPLAYED_DAYS } from './constants';

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
    calendar.length - calendarSeparator <= 0
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

export const getDayByDate = (
  calendar: CalendarType[],
  date: string,
): CalendarType | undefined => {
  return calendar.find((day) => day.date === date);
};

export const saveNewDay = (date: string, text: string): void => {
  const _id = `${date} ${text}`;
  const newDay: CalendarType = { _id, date, text };

  testData.days.push(newDay);
};

export const editExistingDayText = (id: string, newText: string): void => {
  testData.days.forEach((day) => {
    if (day._id === id) {
      day.text = newText;
    }
  });
};
