import {
  getCurrentDate,
  getDaysFromCalendar,
  getDayById,
  getLocalStorageTheme,
} from './utils';

import testCalendar from '../data/testCalendar.json';

test('getCurrentDate test', () => {
  const dateString = `${new Date().getDate()} / ${
    new Date().getMonth() + 1
  } / ${String(new Date().getFullYear()).slice(-2)}`;

  expect(getCurrentDate()).toBe(dateString);
});

describe('getDaysFromCalendar test', () => {
  const AMOUNT_OF_DISPLAYED_DAYS = 15;
  const daysArray = testCalendar.days;

  test('calendar bigger than AMOUNT_OF_DISPLAYED_DAYS', () => {
    const expectedCalendar = daysArray.slice(0, AMOUNT_OF_DISPLAYED_DAYS);

    expect(getDaysFromCalendar(daysArray)).toEqual(expectedCalendar);
  });

  test('calendar less than AMOUNT_OF_DISPLAYED_DAYS', () => {
    const smallCalendar = daysArray.slice(0, AMOUNT_OF_DISPLAYED_DAYS - 5);

    expect(getDaysFromCalendar(smallCalendar)).toEqual(smallCalendar);
  });

  test('calendar equal to AMOUNT_OF_DISPLAYED_DAYS', () => {
    const equalCalendar = daysArray.slice(0, AMOUNT_OF_DISPLAYED_DAYS);

    expect(getDaysFromCalendar(equalCalendar)).toEqual(equalCalendar);
  });
});

describe('getDayById test', () => {
  const daysArray = testCalendar.days;

  test('calendar includes day with id', () => {
    const expectedDay = daysArray.filter((day) => day._id === '1')[0];

    expect(getDayById(daysArray, '1')).toBe(expectedDay);
  });

  test('calendar does not include day with id', () => {
    const expectedDay = daysArray.filter((day) => day._id === 'no such id')[0];

    expect(getDayById(daysArray, 'no such id')).toBe(expectedDay);
  });
});

describe('getLocalStorageTheme test', () => {
  test('localstorage has theme', () => {
    localStorage.setItem('SuccessDiaryTheme', 'dark');

    const expectedTheme = localStorage.getItem('SuccessDiaryTheme');

    expect(getLocalStorageTheme()).toBe(expectedTheme);
  });

  test('localstorage does not has theme', () => {
    localStorage.removeItem('SuccessDiaryTheme');

    expect(getLocalStorageTheme()).toBe('light');
  });
});
