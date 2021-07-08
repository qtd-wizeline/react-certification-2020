import React, { useContext, useRef } from 'react';
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import {
  StyledSideMenu,
  SideMenuOverlay,
  SideMenuLink,
  SideMenuListWrapper,
} from './SideMenu.styled';

export default function SideMenu() {
  const [globalState, dispatch] = useContext(GlobalContext);
  const isLoggedIn = globalState.user.id !== '';
  const { isSideMenuOpen } = globalState;

  const ref = useRef();
  useOnClickOutside(ref, () => {
    dispatch({ type: 'closeSideMenu' });
  });

  const onClickSideMenuLink = () => {
    dispatch({ type: 'closeSideMenu' });
  };

  return (
    <>
      {isSideMenuOpen && (
        <>
          <SideMenuOverlay />
          <StyledSideMenu ref={ref}>
            <SideMenuListWrapper>
              <SideMenuLink to="/" onClick={onClickSideMenuLink}>
                Home
              </SideMenuLink>
              {isLoggedIn && (
                <SideMenuLink to="/favourite" onClick={onClickSideMenuLink}>
                  Favourites
                </SideMenuLink>
              )}
            </SideMenuListWrapper>
          </StyledSideMenu>
        </>
      )}
    </>
  );
}
