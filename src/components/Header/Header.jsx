import React from 'react';
import styled from 'styled-components';
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
`;

const Header = (props) => {
  return (
    <>
      <NavHead>
        <Section>
          <HeaderItem>
            <Menu />
          </HeaderItem>

          <HeaderItem>
            <SearchBar onSetKeyword={props.updateInput} />
          </HeaderItem>
        </Section>
        <Section>
          <HeaderItem>
            <Button color="firebrick">Dark Mode</Button>
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
  background-color: #d84c4a;
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
