import React from 'react';
import YoutubeVideosMock from '../../mocks/youtube-videos-mock';
import { VideoFeedContainer, VideoFeedItemWrapper } from './VideoFeed.styled';
import VideoCard from '../VideoCard';

export default function VideoFeed() {
  return (
    <VideoFeedContainer>
      {YoutubeVideosMock.items.map((item) => (
        <VideoFeedItemWrapper key={item.snippet.thumbnails.high.url}>
          <VideoCard
            thumbnail={item.snippet.thumbnails.high.url}
            title={item.snippet.title}
            description={item.snippet.description}
          />
        </VideoFeedItemWrapper>
      ))}
    </VideoFeedContainer>
  );
}
