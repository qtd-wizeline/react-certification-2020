import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const VideoCard = styled.div`
`;

function RelatedVideoCard(item) {
  const videoId = item.id.videoId;

  if (typeof item.snippet == 'undefined') {
    throw('incomplete item snippet!');
  }

  const videoTitle = item.snippet.title;
  const videoDescription = item.snippet.description;

  return (
    <Link
      data-testid="related-video-card"
      to={{
        pathname: `/video/${videoId}`,
        state: {
          videoId,
          videoTitle,
          videoDescription,
        }
      }}
      key={item.etag}
    >
      <VideoCard key={item.etag}>
        <h3>{videoTitle}</h3>
      </VideoCard>
    </Link>
  );
}

export default RelatedVideoCard;
