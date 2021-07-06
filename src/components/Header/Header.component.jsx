import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { SearchContext } from '../../contexts/SearchContextProvider';
import { AppearanceContext } from '../../contexts/AppearanceContextProvider';
import ToggleButton from '../ToggleButton';

const ButtonLeft = styled.button`
  left: 0%;
  float: left;
  /* Adapt the colors based on primary prop */
  background: #ede9e8;
  color: gray;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

const FormWrapper = styled.div`
  padding-top: 10px;
  left: 50%;
  right: 50%;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonRight = styled(ButtonLeft)`
  float: right;
`;

const SearchField = styled.input`
  padding: 12px 15px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 18px;
  min-width: 400px;
`;

const DarkModeToggleButton = styled(ToggleButton)`
  float: right;
`;

const HeaderWrap = styled.header`
  display: flex;
  flex-direction: row;
  text-align: center;
  color: white;
  margin: 0;
  height: 5em;
  /* background-color: rgba(29, 106, 154, 1); */
  background-color: ${(props) =>
    props.theme.darkMode ? `rgb(0, 52, 85)` : `rgb(29, 106, 154, 1)`};
`;

function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const searchContext = useContext(SearchContext);

  const history = useHistory();
  const handleInput = (event) => {
    event.preventDefault();
    searchContext.searchHandler(searchQuery);
    history.push('/');
  };

  const darkModeContext = useContext(AppearanceContext);

  const handleToggle = () => {
    if (darkModeContext.darkMode) {
      darkModeContext.themeChangeHandler(false);
    } else {
      darkModeContext.themeChangeHandler(true);
    }
  };

  return (
    <HeaderWrap theme={{ darkMode: darkModeContext.darkMode }}>
      <ButtonLeft>Navigation</ButtonLeft>
      <FormWrapper>
        <form onSubmit={handleInput}>
          <SearchField type="text" onChange={(e) => setSearchQuery(e.target.value)} />
        </form>
      </FormWrapper>
      <DarkModeToggleButton onChange={(e) => handleToggle(e.target.value)} />
      <ButtonRight>Login</ButtonRight>
    </HeaderWrap>
  );
}

export default Header;
