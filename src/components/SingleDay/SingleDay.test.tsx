import { fireEvent, render, screen } from '@testing-library/react';
import testData from '../../data/testCalendar.json';
import { getCurrentDate } from '../../utils/utils';
import SingleDay from './SingleDay';

jest.mock('../../data/testCalendar.json', () => ({
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
