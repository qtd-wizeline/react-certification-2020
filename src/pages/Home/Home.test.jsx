import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home.page';
import TestAppContainer from '../../test/TestAppContainer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <TestAppContainer>
        <Home />
      </TestAppContainer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
