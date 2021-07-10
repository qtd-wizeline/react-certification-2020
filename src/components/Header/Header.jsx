import React, { useContext } from 'react';
import styled from 'styled-components';
import YoutubeVideosContext from '../state/YoutubeVideosContext';
import Menu from './Menu';
import SearchBar from './SearchBar';

const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: ${(props) => props.color};
  color: white;
  border: 2px solid white;
  cursor: pointer;
`;

const Header = () => {
  const { state, dispatch } = useContext(YoutubeVideosContext);
  const { theme } = state;

  const changeTheme = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  return (
    <>
      <NavHead backg={theme.NavHeadBackground}>
        <Section>
          <HeaderItem>
            <Menu />
          </HeaderItem>

          <HeaderItem>
            <SearchBar />
          </HeaderItem>
        </Section>
        <Section>
          <HeaderItem>
            <Button color="firebrick" onClick={changeTheme}>
              Dark Mode
            </Button>
          </HeaderItem>
          <HeaderItem>
            <Button color="transparent">Login</Button>
          </HeaderItem>
        </Section>
      </NavHead>
    </>
  );
};

const NavHead = styled.div`
  display: flex;

  justify-content: space-between;

  padding: 10px;
  background-color: ${(props) => props.backg};
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Section = styled.div`
  display: flex;

  align-items: center;
  @media (max-width: 800px) {
    justify-content: space-between;
  }
`;

const HeaderItem = styled.div`
  padding: 5px 15px;
  font-size: 12px;
`;

export default Header;
