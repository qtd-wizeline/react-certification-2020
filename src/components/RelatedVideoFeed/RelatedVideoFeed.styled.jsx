import styled from 'styled-components';
import breakpoints from '../../configs/breakpoints';

export const StyledRelatedVideoFeed = styled.div`
  overflow-y: scroll;
  @media (min-width: ${breakpoints.md}) {
    max-height: 85vh;
  }
`;
