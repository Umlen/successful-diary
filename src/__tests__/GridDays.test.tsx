import { fireEvent, render, screen } from '@testing-library/react';
import GridDays from '../components/GridDays';

test('Open modal window when clicked on day div', () => {
  render(<GridDays />);

  const dayDiv = screen.getAllByText(/\d{1,2} \/ \d{1,2} \/ \d{2}/)[0];

  fireEvent.click(dayDiv);

  expect(screen.getByText('Save')).toBeInTheDocument();
});

test('Close modal window when close button clicked', () => {
  render(<GridDays />);

  const dayDiv = screen.getAllByText(/\d{1,2} \/ \d{1,2} \/ \d{2}/)[0];

  fireEvent.click(dayDiv);

  expect(screen.getByText('Save')).toBeInTheDocument();

  const closeModalWindowButton = screen.getByLabelText(
    'close modal window button',
  );

  fireEvent.click(closeModalWindowButton);

  expect(screen.queryByText('Save')).not.toBeInTheDocument();
});
