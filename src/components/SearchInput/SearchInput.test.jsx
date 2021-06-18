import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import SearchInput from './SearchInput';

it('call submitCallback when button of form is clicked', () => {
  const submitCallback = jest.fn(() => {});
  render(<SearchInput submitCallback={submitCallback} />);
  fireEvent.click(screen.getByTestId('searchinput-submitbutton'));
  expect(submitCallback).toHaveBeenCalledTimes(1);
});
