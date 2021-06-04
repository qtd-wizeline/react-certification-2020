import styled from 'styled-components';
import React from 'react';

const VideoCardBase = styled.div`
  border-radius: 5px;
  margin: 8px;
  background-color: #212121;
  height: 350px;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

const VideoCardThumbnail = styled.div`
  height: 144px;
  width: 100%;
  background-image: ${(props) => `url(${props.thumbnail})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const VideoCardInfo = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 234px;
  h5 {
    margin: 0 0 8px 0;
    color: #fff;
    font-size: 1.25rem;
  }
  p {
    font-size: 0.75rem;
    margin: 0;
    color: #aaa;
    text-align: justify;
  }
`;

export default function VideoCard(props) {
  const { thumbnail, title, description } = props;
  return (
    <VideoCardBase>
      <VideoCardThumbnail thumbnail={thumbnail} />
      <VideoCardInfo>
        <h5>{title}</h5>
        <p>{description}</p>
      </VideoCardInfo>
    </VideoCardBase>
  );
}
