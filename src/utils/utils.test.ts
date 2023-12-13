import {
  getCurrentDate,
  getDaysFromCalendar,
  getDayById,
  getLocalStorageTheme,
} from './utils';

const calendar = [
  { _id: '1', date: '1 / 1 / 11', text: '1' },
  { _id: '2', date: '2 / 2 / 22', text: '2' },
  { _id: '3', date: '3 / 3 / 33', text: '3' },
  { _id: '4', date: '4 / 4 / 44', text: '4' },
  { _id: '5', date: '5 / 5 / 55', text: '5' },
  { _id: '6', date: '6 / 6 / 66', text: '6' },
  { _id: '7', date: '7 / 7 / 77', text: '7' },
  { _id: '8', date: '8 / 8 / 88', text: '8' },
  { _id: '9', date: '9 / 9 / 99', text: '9' },
  { _id: '10', date: '10 / 10 / 10', text: '10' },
  { _id: '11', date: '11 / 11 / 11', text: '11' },
  { _id: '12', date: '12 / 12 / 12', text: '12' },
  { _id: '13', date: '13 / 13 / 13', text: '13' },
  { _id: '14', date: '14 / 14 / 14', text: '14' },
  { _id: '15', date: '15 / 15 / 15', text: '15' },
  { _id: '16', date: '16 / 16 / 16', text: '16' },
];

test('getCurrentDate', () => {
  const dateString = `${new Date().getDate()} / ${
    new Date().getMonth() + 1
  } / ${String(new Date().getFullYear()).slice(-2)}`;

  expect(getCurrentDate()).toBe(dateString);
});

describe('getDaysFromCalendar', () => {
  const AMOUNT_OF_DISPLAYED_DAYS = 15;

  test('returns 15 days if a calendar is greater than or equal to AMOUNT_OF_DISPLAYED_DAYS', () => {
    const equalCalendar = calendar.slice(0, AMOUNT_OF_DISPLAYED_DAYS);
    const greaterCalendarResult = getDaysFromCalendar(calendar);
    const equalCalendarResult = getDaysFromCalendar(equalCalendar);

    expect(greaterCalendarResult).toEqual(equalCalendar);
    expect(equalCalendarResult).toEqual(equalCalendar);
  });

  test('returns a full calendar if it is less than AMOUNT_OF_DISPLAYED_DAYS', () => {
    const smallCalendar = calendar.slice(0, AMOUNT_OF_DISPLAYED_DAYS - 5);
    const result = getDaysFromCalendar(smallCalendar);

    expect(result).toEqual(smallCalendar);
  });
});

describe('getDayById', () => {
  test('returns the correct day for a given id', () => {
    const id = '1';
    const result = getDayById(calendar, id);

    expect(result).toEqual({ _id: '1', date: '1 / 1 / 11', text: '1' });
  });

  test('returns undefined for a non-existent id', () => {
    const id = '17';
    const result = getDayById(calendar, id);

    expect(result).toBeUndefined();
  });

  test('returns undefined for an empty calendar', () => {
    const id = '1';
    const result = getDayById([], id);

    expect(result).toBeUndefined();
  });
});

describe('getLocalStorageTheme', () => {
  test('returns saved value if localstorage stores theme', () => {
    localStorage.setItem('SuccessDiaryTheme', 'dark');
    expect(getLocalStorageTheme()).toBe('dark');
  });

  test('returns default value if localstorage does not store theme', () => {
    localStorage.removeItem('SuccessDiaryTheme');
    expect(getLocalStorageTheme()).toBe('light');
  });
});
