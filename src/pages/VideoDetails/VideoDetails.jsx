import React from 'react';
import { useParams } from 'react-router';
import VideoDetailsView from '../../components/VideoDetailsView/VideoDetailsView';
import { StyledVideoDetailsPage, ContentWrapper } from './VideoDetails.styled';

function VideoDetails() {
  const { videoId } = useParams();
  return (
    <StyledVideoDetailsPage>
      <ContentWrapper>
        <VideoDetailsView videoId={videoId} />
      </ContentWrapper>
    </StyledVideoDetailsPage>
  );
}

export default VideoDetails;
