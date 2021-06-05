import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 340px;
  height: 340px;
  margin: 20px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const Thumbnail = styled.div`
  height: 130px;
  background-image: url(${(props) => props.backgroundimg});
`;

const CardDescription = styled.div`
  margin: 10px;
  color: black;
`;

const VideoTitle = styled.h2`
  color: black;
  font-weight: normal;
  font-size: 20px;
`;

const VideoDescription = styled.p`
  font-size: 15px;
  color: grey;
`;

export default function VideoCard(props) {
  return (
    <Card>
      <Thumbnail backgroundimg={props.item.snippet.thumbnails.medium.url} />
      <CardDescription>
        <VideoTitle>{props.item.snippet.title}</VideoTitle>
        <VideoDescription>{props.item.snippet.description}</VideoDescription>
      </CardDescription>
    </Card>
  );
}
