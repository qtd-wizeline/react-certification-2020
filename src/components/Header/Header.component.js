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
  div {
    display: flex;
    align-items: center;
  }
  small {
    font-size: 15px;
    margin-right: 30px;
  }
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

const ButtonUser = styled.button`
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

const Label = styled.label`
  position: relative;
  display: inline-flex;
  width: 60px;
  height: 28px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    background-color: #ccc;
    /* -webkit-transition: 1s; */
    transition: all 0.4s ease !important;
  }
  span:before {
    position: absolute;
    content: '';
    height: 21px;
    width: 21px;
    left: 5px;
    bottom: 4px;
    border-radius: 50%;
    background-color: white;
    /* -webkit-transition: 1s; */
    transition: all 0.4s ease !important;
  }
  input:checked + span {
    background-color: #2196f3;
  }
  input:checked + span:before {
    transform: translateX(29px);
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
              <input type="checkbox" />
              <span class="slider"></span>
            </Label>
            <small>Dark mode</small>
            <ButtonUser>
              <FaUser />
            </ButtonUser>
          </div>
        </NavGroup>
      </Wrapper>
    </Header>
  );
};

export default StyledHeader;
