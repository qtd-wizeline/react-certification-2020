import styled from 'styled-components';
import breakpoints from '../../configs/breakpoints';

export const VideoFeedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const VideoFeedItemWrapper = styled.div`
  flex: 100%;
  max-width: 100%;
  @media (min-width: ${breakpoints.sm}) {
    flex: 100%;
    max-width: 100%;
  }
  @media (min-width: ${breakpoints.md}) {
    flex: 33.33%;
    max-width: 33.33%;
  }
  @media (min-width: ${breakpoints.lg}) {
    flex: 25%;
    max-width: 25%;
  }
`;
