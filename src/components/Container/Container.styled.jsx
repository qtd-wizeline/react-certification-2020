import styled from 'styled-components';
import breakpoints from '../../configs/breakpoints';

export const StyledContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: ${breakpoints.sm}) {
    width: 750px;
  }
  @media (min-width: ${breakpoints.md}) {
    width: 970px;
  }
  @media (min-width: ${breakpoints.lg}) {
    width: 1170px;
  }
`;
