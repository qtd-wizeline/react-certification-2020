import React from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';

const Header = styled.header`
  color: white;
  font-size: 40px;
  width: 100%;
`;
const Button = styled.button``;

const Wrapper = styled.div`
  margin-left: 14px;
  margin-right: 14px;
  display: flex;
  justify-content: space-around;
`;

const Gap = styled.div`
  flex-grow: 1;
`;

const NavGroup = styled.div``;

const SearchBar = styled.div``;

const StyledHeader = () => {
  return (
    <Header>
      <Wrapper>
        <Button>=/</Button>
        <SearchBar>
          <div>icon</div>
          <div>input</div>
        </SearchBar>
        <Gap></Gap>
        <NavGroup>
          <div>button</div>
          <div>label</div>
          <div>icon</div>
        </NavGroup>
      </Wrapper>
    </Header>
  );
};

export default StyledHeader;
