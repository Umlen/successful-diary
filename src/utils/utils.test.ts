import { saveNewDay } from './utils';

import testCalendar from '../data/testCalendar.json';

test('saveNewDay test', () => {
  const date = 'test date';
  const text = 'text text';
  const _id = `${date} ${text}`;
  const expectedDayObject = { _id, date, text };

  saveNewDay(date, text);

  expect(testCalendar.days.find((day) => day._id === _id)).toEqual(
    expectedDayObject,
  );
});
