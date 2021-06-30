import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContextProvider';
import VideoCard from '../VideoCard';
import { VideoFeedContainer, VideoFeedItemWrapper } from './VideoFeed.styled';

export default function VideoFeed() {
  const { searchResult } = useContext(GlobalContext);
  return (
    <VideoFeedContainer>
      {searchResult.map((item) => (
        <VideoFeedItemWrapper key={item.snippet.thumbnails.high.url}>
          <VideoCard
            videoId={item.id.videoId}
            thumbnail={item.snippet.thumbnails.high.url}
            title={item.snippet.title}
            description={item.snippet.description}
          />
        </VideoFeedItemWrapper>
      ))}
    </VideoFeedContainer>
  );
}
