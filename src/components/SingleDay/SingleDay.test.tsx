import { fireEvent, render, screen } from '@testing-library/react';
import SingleDay from './SingleDay';
import testData from '../../data/testCalendar.json';

test('Save button is disabled if textarea is empty', () => {
  render(<SingleDay />);

  const daysLength = testData.days.length;
  const saveButton = screen.getByText('Save');

  fireEvent.click(saveButton);

  expect(testData.days.length).toBe(daysLength);
});

test('TextArea typing', () => {
  render(<SingleDay />);

  const textArea = screen.getByRole('textbox');

  fireEvent.change(textArea, { target: { value: 'testing' } });

  expect(textArea.textContent).toBe('testing');
});

test('Save button is enabled if textarea has text', () => {
  render(<SingleDay />);

  const daysLength = testData.days.length;
  const textArea = screen.getByRole('textbox');
  const saveButton = screen.getByText('Save');

  fireEvent.change(textArea, { target: { value: 'testing' } });
  fireEvent.click(saveButton);

  expect(testData.days.length).toBe(daysLength + 1);
});
