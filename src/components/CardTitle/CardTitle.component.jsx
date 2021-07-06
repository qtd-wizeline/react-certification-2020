import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AppearanceContext } from '../../contexts/AppearanceContextProvider';

const CardTitleDiv = styled.div`
  margin: 1px;
  height: 56px;
`;

const CardTitleText = styled.h4`
  /* color: blue; */
  color: ${(props) => (props.theme.darkMode ? `rgb(256, 256, 256)` : `rgb(0, 0, 0)`)};
  font-size: 1em;
`;

function CardTitle(props) {
  const videoId = props.item.id.videoId;
  const videoTitle = props.item.snippet.title;
  const videoDescription = props.item.snippet.description;

  const darkModeContext = useContext(AppearanceContext);

  return (
    <CardTitleDiv>
      <Link
        to={{
          pathname: `/video/${videoId}`,
          state: {
            videoId,
            videoTitle,
            videoDescription,
          },
        }}
      >
        <CardTitleText theme={{ darkMode: darkModeContext.darkMode }}>
          {videoTitle}
        </CardTitleText>
      </Link>
    </CardTitleDiv>
  );
}

export default CardTitle;
