import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('SingleDay render when the app is started', () => {
  render(<App />);

  expect(screen.getByPlaceholderText('Enter text...')).toBeInTheDocument();
});

test('GridDays render when change view button clicked', () => {
  render(<App />);

  const changeViewButton = screen.getByLabelText('change view button');

  fireEvent.click(changeViewButton);

  expect(
    screen.queryByPlaceholderText('Enter text...'),
  ).not.toBeInTheDocument();
});

test('SingleDay render when change view button clicked', () => {
  render(<App />);

  const changeViewButton = screen.getByLabelText('change view button');

  fireEvent.click(changeViewButton);

  expect(
    screen.queryByPlaceholderText('Enter text...'),
  ).not.toBeInTheDocument();

  fireEvent.click(changeViewButton);

  expect(screen.getByPlaceholderText('Enter text...')).toBeInTheDocument();
});
