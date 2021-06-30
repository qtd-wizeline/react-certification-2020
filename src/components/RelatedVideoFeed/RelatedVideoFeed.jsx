import React from 'react';
import RelatedVideoCard from '../RelatedVideoCard';
import { StyledRelatedVideoFeed } from './RelatedVideoFeed.styled';

export default function RelatedVideoFeed(props) {
  const { relatedVideos } = props;
  return (
    <StyledRelatedVideoFeed>
      {relatedVideos &&
        relatedVideos.map((item) => (
          <RelatedVideoCard
            key={item.id.videoId}
            videoId={item.id.videoId}
            thumbnail={item.snippet.thumbnails.default.url}
            title={item.snippet.title}
          />
        ))}
    </StyledRelatedVideoFeed>
  );
}
