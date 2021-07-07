import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchField } from './Header.component';

describe('Render Input', () => {
  test('it should render an input with the wizeline test', () => {
    render(<SearchField placeholder="Search" onChange={() => {}} />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  test('it should render an input with the the value wizeline', () => {
    render(<SearchField value="wizeline" onChange={() => {}} />);
    expect(screen.getByDisplayValue('wizeline')).toBeInTheDocument();
  });
});