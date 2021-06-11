import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton/IconButton';
import SearchInput from '../SearchInput/SearchInput';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding: 16px 1rem;
  background-color: #1c5476;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > * + * {
    margin-left: 12px;
  }
`;

const HeaderText = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  color: #fff;
  font-size: 1rem;
`;

function Header() {
  return (
    <Wrapper>
      <HeaderContainer>
        <IconButton type="submit" svgIcon={faBars} />
        <SearchInput />
      </HeaderContainer>
      <HeaderContainer>
        <ToggleSwitch />
        <HeaderText>Dark Mode</HeaderText>
        <IconButton fontSize="1.5rem" svgIcon={faUserCircle} />
      </HeaderContainer>
    </Wrapper>
  );
}

export default Header;
