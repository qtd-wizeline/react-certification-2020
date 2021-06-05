//export { default } from './App.component';
import React from 'react';
import styled from 'styled-components';
import VideoCard from './VideoCard';

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  background-color: #1c5476;
  align-items: center;
  min-height: 60px;
`;

const ButtonDiv = styled.div`
  margin: 5px;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const SearchDiv = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  align-items: center;
  padding: 1px;
  border-radius: 10px;

  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const Button = styled.button`
  background: transparent;
  border: 0;
  color: white;
  cursor: pointer;
  :focus {
    outline: 0;
  }
`;

const Search = styled.input`
  background: none;
  border: none;
  height: 100%;
  color: white;

  :focus {
    outline: none;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  background: white;
  align-items: center;
  justify-content: center;
`;

const HeaderSpace = styled.div`
  flex-grow: 1;
`;

const Login = styled.div`
  padding: 10px;
  background: transparent;
  border-radius: 50%;
  border-style: none;
  margin: 10px;
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const SwitchDiv = styled.div`
  position: relative;
`;
const SwitchLabel = styled.label`
  position: absolute;
  top: 5px;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const Switch = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${SwitchLabel} {
    background: #4fbe79;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const mockVideos = require('./youtube-videos-mock.json');

export default function HomeView() {
  return (
    <div>
      <Header>
        <ButtonDiv>
          <Button>Menu</Button>
        </ButtonDiv>
        <SearchDiv>
          <Search />
        </SearchDiv>
        <HeaderSpace />
        <SwitchDiv>
          <Switch id="checkbox" type="checkbox" />
          <SwitchLabel htmlFor="checkbox" />
        </SwitchDiv>
        <Login>
          <Button>Login </Button>
        </Login>
      </Header>
      <Grid>
        {mockVideos.items.map((item) => (
          <VideoCard item={item} />
        ))}
      </Grid>
    </div>
  );
}
