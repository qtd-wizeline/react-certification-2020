import React from 'react';
import VideoCard from '../VideoCard';
import { VideoFeedContainer, VideoFeedItemWrapper } from './VideoFeed.styled';

export default function VideoFeed({ videoList, prefixVideoLink }) {
  return (
    <VideoFeedContainer>
      {videoList &&
        videoList.map((item) => (
          <VideoFeedItemWrapper key={item.snippet.thumbnails.high.url}>
            <VideoCard
              videoId={item.id.videoId}
              leadTo={`/${prefixVideoLink}/${item.id.videoId}`}
              thumbnail={item.snippet.thumbnails.high.url}
              title={item.snippet.title}
              description={item.snippet.description}
            />
          </VideoFeedItemWrapper>
        ))}
    </VideoFeedContainer>
  );
}
