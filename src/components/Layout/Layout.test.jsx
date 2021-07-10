import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Layout from './Layout.component';

describe('Testing the Layout', () => {
  it('test the Dark Mode Button', () => {
    render(<Layout />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
