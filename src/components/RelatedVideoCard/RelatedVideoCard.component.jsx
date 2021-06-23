import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const VideoCardTitle = styled.div``;

const CardWrapper = styled.div`
  height: 120px;
  width: 360px;
  border-style: solid;
`;

const VideoThumbnailWrapper = styled.div`
  height: 90px;
  width: 120px;
  float: left;
  margin-right: 3px;
`;

const VideoThumbnail = styled.img`
  height: 90px;
  width: 120px;
`;

function RelatedVideoCard(item) {
  const { videoId } = item.id;

  const videoTitle = item.snippet.title;
  const videoDescription = item.snippet.description;

  return (
    <CardWrapper>
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
        <VideoThumbnailWrapper>
          <VideoThumbnail src={item.snippet.thumbnails.default.url} />
        </VideoThumbnailWrapper>
        <VideoCardTitle key={item.etag}>
          <a>{videoTitle}</a>
        </VideoCardTitle>
      </Link>
    </CardWrapper>
  );
}

export default RelatedVideoCard;
