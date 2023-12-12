import { fireEvent, render, screen } from '@testing-library/react';
import testCalendar from '../../../data/testCalendar.json';
import DayModal from './DayModal';

test('Open modal window when clicked on day div', () => {
  const handleClick = jest.fn();

  render(<DayModal id="1" modalWindowToggler={handleClick} />);

  const closeModalWindowButton = screen.getByLabelText(
    'close modal window button',
  );

  fireEvent.click(closeModalWindowButton);

  expect(handleClick).toBeCalledTimes(1);
});

test('Save button can save', () => {
  const handleClick = jest.fn();

  render(<DayModal id="1" modalWindowToggler={handleClick} />);

  const textArea = screen.getByRole('textbox');
  const saveButton = screen.getByText('Save');

  fireEvent.change(textArea, { target: { value: 'testing' } });
  fireEvent.click(saveButton);

  const editedDay = testCalendar.days.filter((day) => day._id === '1')[0];

  expect(editedDay.text).toBe('testing');
});

test('Save button is disabled if textarea is empty', () => {
  const handleClick = jest.fn();

  render(<DayModal id="1" modalWindowToggler={handleClick} />);

  const expectedText = testCalendar.days.filter((day) => day._id === '1')[0]
    .text;
  const textArea = screen.getByRole('textbox');
  const saveButton = screen.getByText('Save');

  fireEvent.change(textArea, { target: { value: '' } });
  fireEvent.click(saveButton);

  const editedDay = testCalendar.days.filter((day) => day._id === '1')[0];

  expect(editedDay.text).toBe(expectedText);
});
