import { editExistingDayText, saveNewDay } from './utils';

import testCalendar from '../data/testCalendar.json';

test('saveNewDay test', () => {
  const date = 'test date';
  const text = 'test text';
  const _id = `${date} ${text}`;
  const expectedDayObject = { _id, date, text };

  saveNewDay(date, text);

  expect(testCalendar.days.find((day) => day._id === _id)).toEqual(
    expectedDayObject,
  );
});

test('editExistingDayText test', () => {
  const text = 'test text';
  const _id = '1';

  editExistingDayText(_id, text);

  const editedDay = testCalendar.days.filter((day) => day._id === _id)[0];

  expect(editedDay.text).toBe(text);
});
