import { fireEvent, render, screen } from '@testing-library/react';

import SaveModal from './SaveModal';

test('SaveModal close button test', () => {
  const handleClick = jest.fn();

  render(<SaveModal modalWindowToggler={handleClick} />);

  const closeButton = screen.getByText('Close');

  fireEvent.click(closeButton);

  expect(handleClick).toBeCalledTimes(1);
});
