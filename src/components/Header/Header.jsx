import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/StyledThemeProvider';
import IconButton from '../IconButton';
import SearchInput from '../SearchInput';
import ToggleSwitch from '../ToggleSwitch';
import {
  HeaderContainer,
  HeaderText,
  HideOnMobileHeaderContainer,
  StyledHeader,
} from './Header.styled';

function Header() {
  const { toggle, theme } = useContext(ThemeContext);
  return (
    <StyledHeader>
      <HeaderContainer>
        <IconButton type="submit" svgIcon={faBars} />
        <SearchInput />
      </HeaderContainer>
      <HideOnMobileHeaderContainer>
        <ToggleSwitch toggled={theme.name === 'dark'} onToggleCallback={toggle} />
        <HeaderText>Dark Mode</HeaderText>
        <IconButton fontSize="1.5rem" svgIcon={faUserCircle} />
      </HideOnMobileHeaderContainer>
    </StyledHeader>
  );
}

export default Header;
