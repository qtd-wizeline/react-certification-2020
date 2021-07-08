import React from 'react';
import { useParams } from 'react-router';
import VideoDetailsRegularView from '../../components/VideoDetailsRegularView';
import { StyledVideoDetailsPage, ContentWrapper } from './VideoDetails.styled';

function VideoDetailsPage() {
  const { videoId } = useParams();
  return (
    <StyledVideoDetailsPage>
      <ContentWrapper>
        <VideoDetailsRegularView videoId={videoId} />
      </ContentWrapper>
    </StyledVideoDetailsPage>
  );
}

export default VideoDetailsPage;
