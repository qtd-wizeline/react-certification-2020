import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import RelatedVideoCard from './index';

describe('Render DrawerToggle', () => {
  const testItem = {
    id: {
      videoId: 'C0DPdy98e4c',
    },
    snippet: {
      title: `TEST VIDEO`,
      description: `COUNTING LEADER AND TONE`,
    },
  };

  test('RelatedVideoCard element exists', () => {
    render(<Router>{RelatedVideoCard(testItem)}</Router>);
    expect(screen.getByTestId('related-video-card')).toBeTruthy();
  });

  // test.skip('calls onClick when clicked', () => {
  //   const handleClick = jest.fn();
  //   render(<DrawerToggle onClick={handleClick} />);
  //   const toggle = screen.getByTestId('drawer-toggle');
  //   fireEvent.click(toggle);
  //   expect(handleClick).toHaveBeenCalledTimes(1);
  // });
});
