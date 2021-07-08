import React, { useEffect, useState } from 'react';
import VideoFeed from '../../components/VideoFeed';
import { lsGetFavouriteList } from '../../utils/localStorageHelper';
import { ContentWrapper, StyledFavouritePage } from './Favourite.styled';

function FavouritePage() {
  const [favouriteVideos, setFavouriteVideos] = useState([]);
  useEffect(() => {
    const favs = lsGetFavouriteList();
    setFavouriteVideos(favs);
  }, []);
  return (
    <StyledFavouritePage>
      <ContentWrapper>
        <VideoFeed videoList={favouriteVideos} prefixVideoLink="favourite" />
      </ContentWrapper>
    </StyledFavouritePage>
  );
}

export default FavouritePage;
