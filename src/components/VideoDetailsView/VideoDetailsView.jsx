import React, { useEffect, useState } from 'react';
import {
  youtubeApiGetSpecificVideo,
  youtubeApiSearchRelated,
} from '../../clients/youtube-api';
import RelatedVideoFeed from '../RelatedVideoFeed';
import {
  RelatedVideoSection,
  VideoDescription,
  VideoPlayer,
  VideoSection,
  VideoTitle,
  Wrapper,
} from './VideoDetailsView.styled';
import useRequest from '../../clients/useRequest';

export default function VideoDetailsView(props) {
  const { videoId } = props;
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [relatedVideos, setRelatedVideos] = useState([]);

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

  return (
    <Wrapper>
      <VideoSection>
        <VideoPlayer
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <VideoTitle>{videoTitle}</VideoTitle>
        <VideoDescription>{videoDescription}</VideoDescription>
      </VideoSection>
      <RelatedVideoSection>
        <RelatedVideoFeed relatedVideos={relatedVideos} />
      </RelatedVideoSection>
    </Wrapper>
  );
}
