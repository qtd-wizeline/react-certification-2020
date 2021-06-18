import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('render text A text for testing purpose!', () => {
  render(<App />);
  expect(screen.getByText('A text for testing purpose!')).toBeInTheDocument();
});
