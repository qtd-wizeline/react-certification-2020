import React from 'react';
import renderer from 'react-test-renderer';
import TestAppContainer from '../../test/TestAppContainer';
import Video from './Video.page';

// const mockUseLocationValue = {
//   pathname: "/video/C0DPdy98e4c",
//   state: {
//     videoId: 'C0DPdy98e4c',
//     videoTitle: 'TEST VIDEO',
//     videoDescription: 'COUNTING LEADER AND TONE',
//     etag: 'test#testvideo',
//   },
// }
// jest.mock('react-router', () => ({
//   ...jest.requireActual("react-router") as {},
//   useLocation: jest.fn().mockImplementation(() => {
//       return mockUseLocationValue;
//   })
// }));

it('renders correctly', () => {
  const mockUseLocationValue = {
    pathname: '/video/C0DPdy98e4c',
    state: {
      videoId: 'C0DPdy98e4c',
      videoTitle: 'TEST VIDEO',
      videoDescription: 'COUNTING LEADER AND TONE',
      etag: 'test#testvideo',
    },
  };

  const tree = renderer
    .create(
      <TestAppContainer>
        <Video />
      </TestAppContainer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
