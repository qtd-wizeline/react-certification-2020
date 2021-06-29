import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CardItem from './index';
// import mockData from './test_data/mock.json';

describe('render CardItem Component', () => {
  const testItem = {
    id: {
      videoId: 'C0DPdy98e4c',
    },
    snippet: {
      title: `TEST VIDEO`,
      description: `COUNTING LEADER AND TONE`,
      thumbnails: {
        medium: {
          url: 'https://i.ytimg.com/vi/C0DPdy98e4c/mqdefault.jpg',
        }
      }
    },
  };

  test('CardItem element exists', () => {
    render(<Router>{CardItem(testItem)}</Router>);
    expect(screen.getByTestId('card-item')).toBeTruthy();
  });
});
