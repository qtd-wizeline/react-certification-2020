import React, { useContext } from 'react';
import VideoFeed from '../../components/VideoFeed';
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import { ContentWrapper, StyledHomePage } from './Home.styled';

function HomePage() {
  const [globalState] = useContext(GlobalContext);
  const { searchResult } = globalState;
  return (
    <StyledHomePage>
      <ContentWrapper>
        <VideoFeed videoList={searchResult} prefixVideoLink="video" />
      </ContentWrapper>
    </StyledHomePage>
  );
}

export default HomePage;
