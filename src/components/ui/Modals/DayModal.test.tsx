import { fireEvent, render, screen } from '@testing-library/react';
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

test('Save button is enabled if textarea has text', () => {
  const handleClick = jest.fn();

  render(<DayModal id="1" modalWindowToggler={handleClick} />);

  const textArea = screen.getByRole('textbox');
  const saveButton = screen.getByText('Save');

  fireEvent.change(textArea, { target: { value: 'testing' } });
  fireEvent.click(saveButton);

  expect(screen.getByText('Saved successfully')).toBeInTheDocument();
});

test('Save button is disabled if textarea is empty', () => {
  const handleClick = jest.fn();

  render(<DayModal id="1" modalWindowToggler={handleClick} />);

  const textArea = screen.getByRole('textbox');
  const saveButton = screen.getByText('Save');

  fireEvent.change(textArea, { target: { value: '' } });
  fireEvent.click(saveButton);

  expect(screen.queryByText('Saved successfully')).not.toBeInTheDocument();
});
