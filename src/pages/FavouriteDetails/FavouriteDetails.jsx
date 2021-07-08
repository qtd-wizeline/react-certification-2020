import React from 'react';
import { useParams } from 'react-router';
import VideoDetailsFavouriteView from '../../components/VideoDetailsFavouriteView';
import { StyledFavouriteDetailsPage, ContentWrapper } from './FavouriteDetails.styled';

function FavouriteDetailsPage() {
  const { videoId } = useParams();
  return (
    <StyledFavouriteDetailsPage>
      <ContentWrapper>
        <VideoDetailsFavouriteView videoId={videoId} />
      </ContentWrapper>
    </StyledFavouriteDetailsPage>
  );
}

export default FavouriteDetailsPage;
