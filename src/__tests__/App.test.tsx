import { fireEvent, render, screen } from '@testing-library/react';
import App from '../components/App';

test('SingleDay render when the app is started', () => {
  render(<App />);

  expect(screen.getByPlaceholderText('Enter text...')).toBeInTheDocument();
});

test('GridDays render when change view button clicked', () => {
  render(<App />);

  const button = screen.getByLabelText('change view button');

  fireEvent.click(button);

  expect(
    screen.queryByPlaceholderText('Enter text...'),
  ).not.toBeInTheDocument();
});
