import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import VideoEmbed from '../../components/VideoEmbed';
import RelatedVideos from '../../components/RelatedVideos';

const VideoSection = styled.section`
  margin-top: 19rem;
  width: 90%;
  height: fit-content;
`;

const VideoDetailsCard = styled.div`
  word-wrap: break-word;
  width: 70rem;
  height: 10rem;
`;

const VideoDiv = styled.div`
  width: fit-content;
  margin-right: 0px;
`;

const VideoDescription = styled.div`
  word-wrap: break-word;
  overflow: auto;
`;

function Video() {
  const location = useLocation();
  const { videoId, videoTitle, videoDescription } = location.state;
  const buildURL = `https://www.youtube.com/embed/${videoId}`;

  return (
    <VideoSection>
      <RelatedVideos videoId={videoId} />
      <VideoDiv>
        <VideoEmbed url={buildURL} />
      </VideoDiv>
      <VideoDetailsCard>
        <h1>{videoTitle}</h1>
        <VideoDescription>
          <p>{videoDescription}</p>
        </VideoDescription>
      </VideoDetailsCard>
    </VideoSection>
  );
}

export default Video;
