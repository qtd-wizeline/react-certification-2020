import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Header from '../Header';

describe('Testing the Header Section', () => {
  it('test the Dark Mode Button', () => {
    render(<Header />);
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
    expect(screen.getByText('Dark Mode').tagName).toBe('BUTTON');
  });

  it('test the Login Button', () => {
    render(<Header />);
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Login').tagName).toBe('BUTTON');
  });

  it('test the Search Bar', () => {
    render(<Header />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search').tagName).toBe('INPUT');
  });

  it('test the Header', () => {
    render(<Header />);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
