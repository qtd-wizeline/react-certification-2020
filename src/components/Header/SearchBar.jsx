import React, { useContext } from 'react';
import styled from 'styled-components';
import YoutubeVideosContext from '../state/YoutubeVideosContext';

const SearchBar = () => {
  const { dispatch } = useContext(YoutubeVideosContext);

  const setSearchTerm = (searchTerm) => {
    dispatch({ type: 'SET_SEARCHTERM', payload: searchTerm });
  };

  const setVideoSelected = (videoSelected) => {
    dispatch({ type: 'SET_VIDEOSELECTED', payload: videoSelected });
  };

  return (
    <Input
      key="random1"
      placeholder="search video"
      onChange={(e) => {
        setSearchTerm(e.target.value);
        setVideoSelected(null);
      }}
    />
  );
};

const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;

  &:active,
  &:focus {
    text-align: left;
  }
`;

export default SearchBar;
