import { checkCalendarSeparator } from './utils';

import testCalendar from '../data/testCalendar.json';

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
    const calendarLength = testCalendar.days.length;
    const calendarSeparator = calendarLength + 5;

    expect(checkCalendarSeparator(calendarSeparator, calendarLength)).toEqual(
      expectedObject,
    );
  });

  test('calendarSeparator equal to calendarLength', () => {
    const expectedObject = { checkedIsStart: true, checkedIsEnd: false };
    const calendarLength = testCalendar.days.length;
    const calendarSeparator = calendarLength;

    expect(checkCalendarSeparator(calendarSeparator, calendarLength)).toEqual(
      expectedObject,
    );
  });

  test('calendarSeparator equal to AMOUNT_OF_DISPLAYED_DAYS', () => {
    const expectedObject = { checkedIsStart: false, checkedIsEnd: true };
    const calendarLength = testCalendar.days.length;
    const calendarSeparator = AMOUNT_OF_DISPLAYED_DAYS;

    expect(checkCalendarSeparator(calendarSeparator, calendarLength)).toEqual(
      expectedObject,
    );
  });

  test('calendarSeparator less than calendarLength and bigger than AMOUNT_OF_DISPLAYED_DAYS', () => {
    const expectedObject = { checkedIsStart: false, checkedIsEnd: false };
    const calendarLength = testCalendar.days.length;
    const calendarSeparator = calendarLength - AMOUNT_OF_DISPLAYED_DAYS;

    expect(checkCalendarSeparator(calendarSeparator, calendarLength)).toEqual(
      expectedObject,
    );
  });
});
