import React from 'react';
import VideoFeed from '../../components/VideoFeed';
import { ContentWrapper, StyledHomePage } from './Home.styled';

function HomePage() {
  return (
    <StyledHomePage>
      <ContentWrapper>
        <VideoFeed />
      </ContentWrapper>
    </StyledHomePage>
  );
}

export default HomePage;
