import React, { useContext } from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
import useFetch from '../../hooks/useFetch';
import YoutubeVideosContext from '../state/YoutubeVideosContext';

const Content = () => {
  const { state } = useContext(YoutubeVideosContext);
  const { searchTerm } = state;

  console.log('searchTerm: ', searchTerm);
  const uri = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}%202&type=video&videoType=any`;

  const { videoList } = useFetch(uri);

  return (
    <>
      <Cards className="cards">
        {videoList ? (
          videoList.map((item) => {
            return (
              <CardItem
                key={item.etag}
                id={item.id.videoId}
                title={item.snippet.title}
                description={item.snippet.description}
                thumbnails={item.snippet.thumbnails.high.url}
              />
            );
          })
        ) : (
          <></>
        )}
      </Cards>
    </>
  );
};

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
  align-items: stretch;
`;

export default Content;
