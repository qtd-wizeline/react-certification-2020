import React from 'react';
import styled from 'styled-components';

import { FaListUl, FaUser, FaSearch } from 'react-icons/fa';

const Header = styled.header`
  color: white;
  font-size: 40px;
  width: 100%;
  background-color: #1c5476;
`;
const Button = styled.button`
  border: none;
  background-color: #1c5476;
  color: white;
  padding: 12px;
  svg {
    width: 24px !important;
    height: 24px !important;
  }
`;

const Wrapper = styled.div`
  margin-left: 14px;
  margin-right: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Gap = styled.div`
  flex-grow: 1;
`;

const NavGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBar = styled.div`
  display: flex;
  position: relative;
  margin-left: 0;
  margin-right: 16px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
  flex-grow: 0.3;
  height: 30px;

  div {
    height: 100%;
    display: flex;
    padding: 0px 16px;
    position: absolute;
    align-items: center;
    pointer-events: none;
    justify-content: center;
  }
  div {
    input {
      padding-left: calc(1em + 32px);
      background-color: transparent;
      border: none;
      color: white;
      z-index: 10;
    }
  }
  svg {
    height: 20px;
  }
`;
const FaSearchBar = styled.div`
  position: absolute;
`;

const Label = styled.label`
  small {
    font-size: 20px;
  }
`;

const ButtonCheck = styled.button`
  background-color: #cacaca;
  border: none;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  svg {
    width: 20px;
    height: 20px;
    color: white;
}
  }
`;

const StyledHeader = () => {
  return (
    <Header>
      <Wrapper>
        <Button>
          <FaListUl />
        </Button>
        <SearchBar>
          <FaSearchBar>
            <FaSearch />
          </FaSearchBar>
          <div>
            <input placeholder="Search..." value="wizeline" />
          </div>
        </SearchBar>
        <Gap></Gap>
        <NavGroup>
          <div>
            <Label>
              <span></span>
              <small>Dark mode</small>
            </Label>
            <ButtonCheck>
              <FaUser />
            </ButtonCheck>
          </div>
        </NavGroup>
      </Wrapper>
    </Header>
  );
};

export default StyledHeader;
