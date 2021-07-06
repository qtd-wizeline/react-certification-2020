import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AppearanceContext } from '../../contexts/AppearanceContextProvider';

const VideoCardTitle = styled.div`
  padding-left: 7.5em;
  width: 394px;
  color: ${(props) => (props.theme.darkMode ? `rgb(256, 256, 256)` : `rgb(0, 0, 0)`)};
`;

const CardWrapper = styled.div`
  height: 120px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: ${(props) =>
    props.theme.darkMode ? `rgb(0, 0, 0)` : `rgb(256, 256, 256)`};
  margin: 5px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  float: left;
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

function RelatedVideoCard(props) {
  const darkModeContext = useContext(AppearanceContext);

  const { item } = props;

  const { videoId } = item.id;

  const videoTitle = item.snippet.title;
  const videoDescription = item.snippet.description;

  return (
    <CardWrapper key={item.etag} theme={{ darkMode: darkModeContext.darkMode }}>
      <Link
        data-testid="related-video-card"
        to={{
          pathname: `/video/${videoId}`,
          state: {
            videoId,
            videoTitle,
            videoDescription,
          },
        }}
        key={item.etag}
      >
        <VideoThumbnailWrapper>
          <VideoThumbnail src={item.snippet.thumbnails.default.url} />
        </VideoThumbnailWrapper>
        <VideoCardTitle theme={{ darkMode: darkModeContext.darkMode }}>
          <h5>{videoTitle}</h5>
        </VideoCardTitle>
      </Link>
    </CardWrapper>
  );
}

export default RelatedVideoCard;
