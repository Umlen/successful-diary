import {
  getCurrentDate,
  getDaysFromCalendar,
  getDayById,
  getLocalStorageTheme,
  editExistingDayText,
  saveNewDay,
  checkCalendarSeparator,
  getDayByDate,
  getDayIndexByDate,
} from './utils';

import testData from '@Data/testCalendar.json';
import { AMOUNT_OF_DISPLAYED_DAYS } from './constants';

jest.mock('./constants.ts', () => ({ AMOUNT_OF_DISPLAYED_DAYS: 3 }));

jest.mock('@Data/testCalendar.json', () => ({
  days: [
    { _id: '1', date: '1 / 1 / 11', text: '1' },
    { _id: '2', date: '2 / 2 / 22', text: '2' },
    { _id: '3', date: '3 / 3 / 33', text: '3' },
    { _id: '4', date: '4 / 4 / 44', text: '4' },
  ],
}));

test('function getCurrentDate returns the current date in "day / month / year" format', () => {
  const dateString = `${new Date().getDate()} / ${
    new Date().getMonth() + 1
  } / ${String(new Date().getFullYear()).slice(-2)}`;

  expect(getCurrentDate()).toBe(dateString);
});

describe('getDaysFromCalendar', () => {
  test('returns last 3 days if a calendar is greater than AMOUNT_OF_DISPLAYED_DAYS', () => {
    const equalCalendar = testData.days.slice(-3);
    const greaterCalendarResult = getDaysFromCalendar(
      testData.days,
      AMOUNT_OF_DISPLAYED_DAYS,
    );

    expect(greaterCalendarResult).toEqual(equalCalendar);
  });

  test('returns a full calendar if it is less than or equal to AMOUNT_OF_DISPLAYED_DAYS', () => {
    const smallCalendar = testData.days.slice(0, AMOUNT_OF_DISPLAYED_DAYS - 1);
    const equalCalendar = testData.days.slice(0, AMOUNT_OF_DISPLAYED_DAYS);
    const smallCalendarResult = getDaysFromCalendar(
      smallCalendar,
      AMOUNT_OF_DISPLAYED_DAYS,
    );
    const equalCalendarResult = getDaysFromCalendar(
      equalCalendar,
      AMOUNT_OF_DISPLAYED_DAYS,
    );

    expect(smallCalendarResult).toEqual(smallCalendar);
    expect(equalCalendarResult).toEqual(equalCalendar);
  });
});

describe('getDayById', () => {
  test('returns the correct day for a given id', () => {
    const id = '1';
    const result = getDayById(testData.days, id);

    expect(result).toEqual({ _id: '1', date: '1 / 1 / 11', text: '1' });
  });

  test('returns undefined for a non-existent id', () => {
    const id = '5';
    const result = getDayById(testData.days, id);

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

describe('saveNewDay function', () => {
  beforeEach(() => {
    testData.days = [];
  });

  test('correctly adds a new day', () => {
    const date = '13 / 12 / 23';
    const text = 'test text';
    const _id = `${date} ${text}`;
    const expectedDayObject = { _id, date, text };

    saveNewDay(date, text);

    expect(testData.days).toContainEqual(expectedDayObject);
  });
});

describe('editExistingDayText function', () => {
  beforeEach(() => {
    testData.days = [{ _id: '1', date: '13 / 12 / 23', text: 'initial text' }];
  });

  test('correctly edits an existing day', () => {
    const newText = 'updated text';

    editExistingDayText('1', newText);

    const editedDay = testData.days.find((day) => day._id === '1');

    expect(editedDay?.text).toBe(newText);
  });

  test('does not change text for non-existent id', () => {
    const newText = 'updated text';

    editExistingDayText('non-existent-id', newText);

    const editedDay = testData.days.find((day) => day._id === '1');

    expect(editedDay?.text).not.toBe(newText);
  });
});

describe('checkCalendarSeparator test', () => {
  test('calendarLength less than AMOUNT_OF_DISPLAYED_DAYS', () => {
    const expectedObject = { checkedIsStart: true, checkedIsEnd: true };
    const calendarLength = 0;
    const calendarSeparator = AMOUNT_OF_DISPLAYED_DAYS;

    expect(checkCalendarSeparator(calendarSeparator, calendarLength)).toEqual(
      expectedObject,
    );
  });

  test('calendarLength equal to AMOUNT_OF_DISPLAYED_DAYS', () => {
    const expectedObject = { checkedIsStart: true, checkedIsEnd: true };
    const calendarLength = AMOUNT_OF_DISPLAYED_DAYS;
    const calendarSeparator = AMOUNT_OF_DISPLAYED_DAYS;

    expect(checkCalendarSeparator(calendarSeparator, calendarLength)).toEqual(
      expectedObject,
    );
  });

  test('calendarSeparator bigger than calendarLength', () => {
    const expectedObject = { checkedIsStart: true, checkedIsEnd: false };
    const calendarLength = 20;
    const calendarSeparator = 30;

    expect(checkCalendarSeparator(calendarSeparator, calendarLength)).toEqual(
      expectedObject,
    );
  });

  test('calendarSeparator equal to calendarLength', () => {
    const expectedObject = { checkedIsStart: true, checkedIsEnd: false };
    const calendarLength = 30;
    const calendarSeparator = 30;

    expect(checkCalendarSeparator(calendarSeparator, calendarLength)).toEqual(
      expectedObject,
    );
  });

  test('calendarSeparator equal to AMOUNT_OF_DISPLAYED_DAYS', () => {
    const expectedObject = { checkedIsStart: false, checkedIsEnd: true };
    const calendarLength = 20;
    const calendarSeparator = AMOUNT_OF_DISPLAYED_DAYS;

    expect(checkCalendarSeparator(calendarSeparator, calendarLength)).toEqual(
      expectedObject,
    );
  });

  test('calendarSeparator less than calendarLength and bigger than AMOUNT_OF_DISPLAYED_DAYS', () => {
    const expectedObject = { checkedIsStart: false, checkedIsEnd: false };
    const calendarLength = 45;
    const calendarSeparator = calendarLength - AMOUNT_OF_DISPLAYED_DAYS;

    expect(checkCalendarSeparator(calendarSeparator, calendarLength)).toEqual(
      expectedObject,
    );
  });
});

describe('getDayByDate function', () => {
  beforeEach(() => {
    testData.days = [];
  });

  test('returns undefined if calendar does not include a day with passed date', () => {
    const result = getDayByDate(testData.days, '15 / 12 / 23');

    expect(result).toBeUndefined();
  });

  test('returns a day with passed date if calendar includes it', () => {
    const expectedDay = { _id: '1', date: '15 / 12 / 23', text: '1' };
    testData.days = [expectedDay];
    const result = getDayByDate(testData.days, '15 / 12 / 23');

    expect(result).toEqual(expectedDay);
  });
});

describe('getDayIndexByDate function', () => {
  test('returns index of a day with passed date if calendar includes it', () => {
    const expectedIndex = 1;
    const result = getDayIndexByDate(testData.days, '2 / 2 / 22');

    expect(result).toBe(expectedIndex);
  });

  test('returns calendar length if calendar does not include a day with passed date', () => {
    const expectedValue = testData.days.length;
    const result = getDayIndexByDate(testData.days, 'no such date');

    expect(result).toBe(expectedValue);
  });
});
