import { type CalendarType } from '../types/types';
import testData from '../data/testCalendar.json';

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

export const getDayById = (
  calendar: CalendarType[],
  id: string,
): CalendarType => {
  return calendar.filter((day) => day._id === id)[0];
};

export const getLocalStorageTheme = (): string => {
  const savedTheme = localStorage.getItem('SuccessDiaryTheme');

  if (savedTheme) {
    return savedTheme;
  }

  return 'light';
};

export const saveNewDay = (date: string, text: string): void => {
  const _id = `${date} ${text}`;
  const newDay: CalendarType = { _id, date, text };

  testData.days.push(newDay);
  console.log(testData);
};
