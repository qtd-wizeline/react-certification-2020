/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  lsAddToFavourite,
  lsCheckIfFavourite,
  lsGetFavourite,
  lsGetFavouriteList,
  lsRemoveFromFavourite,
} from '../../utils/localStorageHelper';
import VideoDetailsView from '../VideoDetailsView/VideoDetailsView';

export default function VideoDetailsFavouriteView(props) {
  const { videoId } = props;
  const [relatedVideos, setRelatedVideos] = useState([]);

  const [video, setVideo] = useState(null);

  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    setIsFavourite(lsCheckIfFavourite());
    const favourite = lsGetFavourite(videoId);
    setVideo(favourite);

    const favouriteList = lsGetFavouriteList();
    setRelatedVideos(favouriteList.filter((item) => item.id.videoId !== videoId));
  }, []);

  const onClickRemoveFromFavourite = () => {
    lsRemoveFromFavourite(videoId);
  };

  const onClickAddToFavourite = () => {
    lsAddToFavourite(video);
  };

  return (
    <>
      {video && (
        <VideoDetailsView
          videoId={videoId}
          videoTitle={video.snippet.title}
          videoDescription={video.snippet.description}
          relatedVideos={relatedVideos}
          isFavourite={isFavourite}
          onClickRemoveFromFavourite={onClickRemoveFromFavourite}
          onClickAddToFavourite={onClickAddToFavourite}
        />
      )}
    </>
  );
}
