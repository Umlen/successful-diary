import { editExistingDayText, saveNewDay } from './utils';

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
