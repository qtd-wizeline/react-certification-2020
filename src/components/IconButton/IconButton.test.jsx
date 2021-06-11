import renderer from 'react-test-renderer';
import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import IconButton from './IconButton';

it('matches snapshot', () => {
  const tree = renderer.create(<IconButton svgIcon={faBars} />).toJSON();
  expect(tree).toMatchSnapshot();
});
