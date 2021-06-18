import styled from 'styled-components';
import breakpoints from '../../configs/breakpoints';

export const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: ${(props) => props.theme.fg};
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > * + * {
    margin-left: 12px;
  }
`;

export const HideOnMobileHeaderContainer = styled(HeaderContainer)`
  display: none;
  @media (min-width: ${breakpoints.sm}) {
    display: flex;
  }
  @media (min-width: ${breakpoints.md}) {
    display: flex;
  }
  @media (min-width: ${breakpoints.lg}) {
    display: flex;
  }
`;

export const HeaderText = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  color: ${(props) => props.theme.text};
  font-size: 1rem;
`;
