import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';
import useFetch from '../../hooks/useFetch';

const Content = (props) => {
  const uri = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${props.input}%202&type=video&videoType=any`;

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
                onSelectVideo={props.onSelectVideo}
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
