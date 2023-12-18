import { fireEvent, render, screen } from '@testing-library/react';
import testData from '@Data/testCalendar.json';
import { getCurrentDate } from '@Utils/utils';
import SingleDay from './SingleDay';

jest.mock('@Data/testCalendar.json', () => ({
  days: [],
}));

describe('SingleDay render', () => {
  beforeEach(() => {
    testData.days = [];
  });

  test(`renders with empty textarea and disabled save button if 
  calendar does not include a day with today date`, () => {
    render(<SingleDay />);

    const saveButton = screen.getByText('Save');
    const textArea = screen.getByRole('textbox');

    expect(textArea.textContent).toBe('');
    expect(saveButton).toBeDisabled();
  });

  test(`renders with day text in textarea and enabled save button if 
  calendar includes a day with today date`, () => {
    const todayDate = getCurrentDate();
    testData.days = [{ _id: '1', date: todayDate, text: '1' }];

    render(<SingleDay />);

    const saveButton = screen.getByText('Save');
    const textArea = screen.getByRole('textbox');

    expect(textArea.textContent).toBe('1');
    expect(saveButton).not.toBeDisabled();
  });
});

describe('save button testing', () => {
  beforeEach(() => {
    testData.days = [];
  });

  test('Save button is disabled if textarea is empty', () => {
    render(<SingleDay />);

    const saveButton = screen.getByText('Save');

    fireEvent.click(saveButton);

    expect(screen.queryByText('Saved successfully')).not.toBeInTheDocument();
  });

  test('Save button is enabled if textarea has text', () => {
    render(<SingleDay />);

    const textArea = screen.getByRole('textbox');
    const saveButton = screen.getByText('Save');

    fireEvent.change(textArea, { target: { value: 'testing' } });
    fireEvent.click(saveButton);

    expect(screen.getByText('Saved successfully')).toBeInTheDocument();
  });
});

test('TextArea typing', () => {
  render(<SingleDay />);

  const textArea = screen.getByRole('textbox');

  fireEvent.change(textArea, { target: { value: 'testing' } });

  expect(textArea.textContent).toBe('testing');
});

test(`Should display current day on render. 
  Clicks on previous button until reaches the beginning of a days array. 
  On each click it should render previous day. 
  Then previous button has to become disabled and next button has to be enabled. 
  Clicks on next button until reaches the ending of days array. 
  On each click it should render next day. 
  Finally both buttons have to return to their default sate and current day has to be rendered`, () => {
  testData.days = [
    { _id: '1', date: '1 / 1 / 11', text: '1' },
    { _id: '2', date: '2 / 2 / 22', text: '2' },
  ];

  render(<SingleDay />);

  const previousButton = screen.getByLabelText('previous day');
  const nextButton = screen.getByLabelText('next day');
  const currentDate = getCurrentDate();

  expect(screen.getByText(currentDate)).toBeInTheDocument();
  expect(nextButton).toBeDisabled();
  expect(previousButton).not.toBeDisabled();

  fireEvent.click(previousButton);

  expect(screen.getByText('2 / 2 / 22')).toBeInTheDocument();
  expect(nextButton).not.toBeDisabled();
  expect(previousButton).not.toBeDisabled();

  fireEvent.click(previousButton);

  expect(screen.getByText('1 / 1 / 11')).toBeInTheDocument();
  expect(nextButton).not.toBeDisabled();
  expect(previousButton).toBeDisabled();

  fireEvent.click(nextButton);

  expect(screen.getByText('2 / 2 / 22')).toBeInTheDocument();
  expect(nextButton).not.toBeDisabled();
  expect(previousButton).not.toBeDisabled();

  fireEvent.click(nextButton);

  expect(screen.getByText(currentDate)).toBeInTheDocument();
  expect(nextButton).toBeDisabled();
  expect(previousButton).not.toBeDisabled();
});
