import React from 'react';
import styled from 'styled-components';
import VideoCard from '../../components/VideoCard/VideoCard';
import YoutubeVideosMock from '../../mocks/youtube-videos-mock';

const HomePageBase = styled.section`
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 128px;
`;

const VideoFeed = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const VideoFeedItemWrapper = styled.div`
  flex: 25%;
  max-width: 25%;
`;

function HomePage() {
  return (
    <HomePageBase>
      <ContentWrapper>
        <VideoFeed>
          {YoutubeVideosMock.items.map((item) => (
            <VideoFeedItemWrapper key={item.snippet.thumbnails.high.url}>
              <VideoCard
                thumbnail={item.snippet.thumbnails.high.url}
                title={item.snippet.title}
                description={item.snippet.description}
              />
            </VideoFeedItemWrapper>
          ))}
        </VideoFeed>
      </ContentWrapper>
    </HomePageBase>
  );
}

export default HomePage;
