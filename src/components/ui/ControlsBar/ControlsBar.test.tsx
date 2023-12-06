import { fireEvent, render, screen } from '@testing-library/react';
import ControlsBar from './ControlsBar';

test('Open modal window when settings button clicked', () => {
  render(<ControlsBar isGridView={false} gridViewToggler={() => {}} />);

  const settingsButton = screen.getByLabelText('settings button');

  fireEvent.click(settingsButton);

  expect(screen.getByText('Log in')).toBeInTheDocument();
});

test('Close modal window when close button clicked', () => {
  render(<ControlsBar isGridView={false} gridViewToggler={() => {}} />);

  const settingsButton = screen.getByLabelText('settings button');

  fireEvent.click(settingsButton);

  expect(screen.getByText('Log in')).toBeInTheDocument();

  const closeModalWindowButton = screen.getByAltText(
    'close modal window button',
  );

  fireEvent.click(closeModalWindowButton);

  expect(screen.queryByText('Log in')).not.toBeInTheDocument();
});
