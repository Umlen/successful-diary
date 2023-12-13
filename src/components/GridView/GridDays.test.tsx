import { fireEvent, render, screen } from '@testing-library/react';
import GridDays from './GridDays';

describe('open and close DayModal component', () => {
  test('open DayModal when day button clicked', () => {
    render(<GridDays />);

    const dayButton = screen.getAllByText(/\d{1,2} \/ \d{1,2} \/ \d{2}/)[0];

    fireEvent.click(dayButton);

    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  test('close DayModal when close modal window button clicked', () => {
    render(<GridDays />);

    const dayButton = screen.getAllByText(/\d{1,2} \/ \d{1,2} \/ \d{2}/)[0];

    fireEvent.click(dayButton);

    expect(screen.getByText('Save')).toBeInTheDocument();

    const closeModalWindowButton = screen.getByLabelText(
      'close modal window button',
    );

    fireEvent.click(closeModalWindowButton);

    expect(screen.queryByText('Save')).not.toBeInTheDocument();
  });
});

test(`clicks on previous button until reaches the beginning of a days array, 
    then this button has to become disabled and next button has to be enabled; 
    after that clicks on next button until reaches the ending of a days array, 
    finally both buttons have to return to their default sate`, () => {
  render(<GridDays />);

  const previousButton = screen.getByLabelText('previous 15 days');
  const nextButton = screen.getByLabelText('next 15 days');

  expect(nextButton).toBeDisabled();
  expect(previousButton).not.toBeDisabled();

  fireEvent.click(previousButton);

  expect(nextButton).not.toBeDisabled();

  fireEvent.click(previousButton);

  expect(nextButton).not.toBeDisabled();
  expect(previousButton).toBeDisabled();

  fireEvent.click(nextButton);

  expect(previousButton).not.toBeDisabled();

  fireEvent.click(nextButton);

  expect(nextButton).toBeDisabled();
  expect(previousButton).not.toBeDisabled();
});
