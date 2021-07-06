import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import VideoEmbed from '../../components/VideoEmbed';
import RelatedVideos from '../../components/RelatedVideos';
import { AppearanceContext } from '../../contexts/AppearanceContextProvider';

const VideoSection = styled.section`
  margin-top: 5rem;
  width: 100%;
  height: fit-content;
`;

const VideoDetailsCard = styled.div`
  word-wrap: break-word;
  width: 100%;
  height: fit-content;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: ${(props) =>
    props.theme.darkMode ? `rgb(0, 0, 0)` : `rgb(256, 256, 256)`};
  padding: 5px;
`;

const VideoDiv = styled.div`
  /* width: 100%;
  height: auto;
  margin-right: 0px; */
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
`;

const DescriptionAndRelatedVideo = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoTitle = styled.h1`
  color: ${(props) => (props.theme.darkMode ? `rgb(256, 256, 256)` : `rgb(0, 0, 0)`)};
`;

const VideoDescription = styled.div`
  color: ${(props) => (props.theme.darkMode ? `rgb(256, 256, 256)` : `rgb(0, 0, 0)`)};
  overflow-y: scroll;
  word-wrap: break-word;
  overflow: auto;
  height: 10rem;
`;

function Video() {
  const location = useLocation();
  const { videoId, videoTitle, videoDescription } = location.state;
  const buildURL = `https://www.youtube.com/embed/${videoId}`;

  const darkModeContext = useContext(AppearanceContext);

  return (
    <VideoSection>
      <VideoDiv>
        <VideoEmbed url={buildURL} />
      </VideoDiv>
      <DescriptionAndRelatedVideo>
        <VideoDetailsCard theme={{ darkMode: darkModeContext.darkMode }}>
          <VideoTitle theme={{ darkMode: darkModeContext.darkMode }}>
            {videoTitle}
          </VideoTitle>
          <VideoDescription theme={{ darkMode: darkModeContext.darkMode }}>
            <p>{videoDescription}</p>
          </VideoDescription>
        </VideoDetailsCard>
        <RelatedVideos videoId={videoId} />
      </DescriptionAndRelatedVideo>
    </VideoSection>
  );
}

export default Video;
