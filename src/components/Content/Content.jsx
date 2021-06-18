import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';

const Content = (props) => {
  const [videoList, setVideoList] = useState(props.videoList);

  const loadVideos = (list) => {
    console.log('Esto es la lista', list);
    console.log('Esto es el etag', list.etag);
    if (list) {
      console.log('entra');
      setVideoList(
        list.items.map((item) => {
          return (
            <CardItem
              key={item.etag}
              title={item.snippet.title}
              description={item.snippet.description}
              thumbnails={item.snippet.thumbnails.high.url}
            />
          );
        })
      );
    }
  };

  useEffect(() => {
    loadVideos(props.videoList);
  }, [props.videoList]);

  return (
    <>
      <Cards className="cards">{videoList}</Cards>
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
