import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import RelatedVideoCard from '../RelatedVideoCard';
// import mockRelatedVideos from '../../mock/youtube-mock-related-videos.json';
import { API_KEY } from '../../utils/constants';

const RelatedVideosWrapper = styled.div`
  overflow: scroll;
  height: 20em;
  width: 20em;
  float: right;
`;

function RelatedVideos(props) {
  const APIKey = API_KEY;

  const { videoId } = props;
  const [errors, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [results, setResults] = useState(null);

  useEffect(() => {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&relatedToVideoId=${videoId}&type=video&key=${APIKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          setError(true);
          setIsLoaded(true);
        } else {
          setResults(result);
          setIsLoaded(true);
        }
      });
  }, [videoId]);

  if (errors) {
    return <h1>Error</h1>;
  }

  if (!isLoaded) {
    return <h2>Loading...</h2>;
  }

  return (
    <RelatedVideosWrapper>
      {results.items.map((d) => RelatedVideoCard(d))}
    </RelatedVideosWrapper>
  );
}

export default RelatedVideos;
