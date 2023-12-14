import {
  editExistingDayText,
  saveNewDay,
  checkCalendarSeparator,
} from './utils';

import testData from '../data/testCalendar.json';

jest.mock('../data/testCalendar.json', () => ({
  days: [],
}));

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
  const AMOUNT_OF_DISPLAYED_DAYS = 15;

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
    const calendarLength = 10;
    const calendarSeparator = AMOUNT_OF_DISPLAYED_DAYS;

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
    const calendarLength = AMOUNT_OF_DISPLAYED_DAYS;
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
