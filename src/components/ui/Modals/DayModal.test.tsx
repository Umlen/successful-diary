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
