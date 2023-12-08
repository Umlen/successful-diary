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
  flag: number,
): CalendarType[] => {
  const spliceStart = calendar.length - flag < 0 ? 0 : calendar.length - flag;
  return [...calendar].splice(spliceStart, 15);
};

export const getLocalStorageTheme = (): string => {
  const savedTheme = localStorage.getItem('SuccessDiaryTheme');

  if (savedTheme) {
    return savedTheme;
  }

  return 'light';
};

export const checkGridDaysFlag = (
  flag: number,
  dataLength: number,
): { checkedIsStart: boolean; checkedIsEnd: boolean } => {
  if (dataLength === 15) {
    return { checkedIsStart: true, checkedIsEnd: true };
  }

  if (flag >= dataLength) {
    return { checkedIsStart: true, checkedIsEnd: false };
  }

  if (flag === 15) {
    return { checkedIsStart: false, checkedIsEnd: true };
  }

  return { checkedIsStart: false, checkedIsEnd: false };
};
