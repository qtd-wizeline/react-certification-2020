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

export default function VideoDetailsView(props) {
  const { videoId } = props;
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [relatedVideos, setRelatedVideos] = useState([]);
  useEffect(() => {
    youtubeApiGetSpecificVideo(videoId)
      .then((res) => {
        if (res.status === 403) {
          throw new Error('Youtube API limit has exceeded');
        } else {
          return res.json();
        }
      })
      .then((json) => {
        setVideoTitle(json.items[0].snippet.title);
        setVideoDescription(json.items[0].snippet.description);
      })
      .catch((error) => {
        alert(error.message);
      });
    youtubeApiSearchRelated(videoId)
      .then((res) => {
        if (res.status === 403) {
          throw new Error('Youtube API limit has exceeded');
        } else {
          return res.json();
        }
      })
      .then((json) => {
        setRelatedVideos(json.items);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [videoId]);
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
