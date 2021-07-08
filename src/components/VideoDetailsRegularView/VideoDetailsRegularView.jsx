/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import useRequest from '../../clients/useRequest';
import {
  youtubeApiGetSpecificVideo,
  youtubeApiSearchRelated,
} from '../../clients/youtube-api';
import {
  lsAddToFavourite,
  lsCheckIfFavourite,
  lsRemoveFromFavourite,
} from '../../utils/localStorageHelper';
import VideoDetailsView from '../VideoDetailsView';

export default function VideoDetailsRegularView(props) {
  const { videoId } = props;

  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [relatedVideos, setRelatedVideos] = useState([]);

  const [isFavourite, setIsFavourite] = useState(false);

  const getSpecificVideoRequest = useRequest();
  const searchRelatedRequest = useRequest();

  useEffect(() => {
    getSpecificVideoRequest.handleFetchPromise(youtubeApiGetSpecificVideo(videoId));
    searchRelatedRequest.handleFetchPromise(youtubeApiSearchRelated(videoId));
  }, [videoId]);

  useEffect(() => {
    const { result } = getSpecificVideoRequest;
    if (result.response !== null) {
      setVideoTitle(result.response.items[0].snippet.title);
      setVideoDescription(result.response.items[0].snippet.description);
    }
  }, [getSpecificVideoRequest.result.response]);

  useEffect(() => {
    const { result } = searchRelatedRequest;
    if (result.response !== null) {
      setRelatedVideos(result.response.items);
    }
  }, [searchRelatedRequest.result.response]);

  useEffect(() => {
    setIsFavourite(lsCheckIfFavourite());
  }, []);

  const onClickRemoveFromFavourite = () => {
    lsRemoveFromFavourite(videoId);
    setIsFavourite(false);
  };

  const onClickAddToFavourite = () => {
    lsAddToFavourite(getSpecificVideoRequest.result.response.items[0]);
    setIsFavourite(true);
  };

  return (
    <VideoDetailsView
      videoId={videoId}
      videoTitle={videoTitle}
      videoDescription={videoDescription}
      relatedVideos={relatedVideos}
      isFavourite={isFavourite}
      onClickRemoveFromFavourite={onClickRemoveFromFavourite}
      onClickAddToFavourite={onClickAddToFavourite}
    />
  );
}
