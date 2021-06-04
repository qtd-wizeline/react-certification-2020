import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';

import data from './youtube-videos-mock.json';

const mockData = data.items.map((item) => {
  return (
    <CardItem
      key={item.etag}
      title={item.snippet.title}
      description={item.snippet.description}
      thumbnails={item.snippet.thumbnails.high.url}
    />
  );
});

const Content = () => {
  return (
    <>
      <Cards className="cards">{mockData}</Cards>
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
