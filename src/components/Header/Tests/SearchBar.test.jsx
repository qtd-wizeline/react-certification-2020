import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import SearchBar from '../SearchBar';

describe('test Search Bar', () => {
  it('test it loads the mock cards', () => {
    const onSetKeyword = jest.fn();
    render(<SearchBar onSetKeyword={onSetKeyword} />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'pokemon' } });
    expect(screen.getByDisplayValue('pokemon')).toBeTruthy();
    expect(onSetKeyword).toHaveBeenCalled();
  });
});
