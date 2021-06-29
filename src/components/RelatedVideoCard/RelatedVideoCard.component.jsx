import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const VideoCardTitle = styled.div`
  padding-left: 7.5em;
`;

const CardWrapper = styled.div`
  height: 120px;
  width: 370px;
  border-style: solid;
`;

const VideoThumbnailWrapper = styled.div`
  height: 90px;
  width: 120px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
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
    <CardWrapper key={item.etag}>
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
        <VideoCardTitle>
          <h5>{videoTitle}</h5>
        </VideoCardTitle>
      </Link>
    </CardWrapper>
  );
}

export default RelatedVideoCard;
