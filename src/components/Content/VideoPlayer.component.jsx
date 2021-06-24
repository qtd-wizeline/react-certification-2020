import React from 'react';

const VideoPlayer = (props) => {
  const url = `https://www.youtube.com/embed/${props.id}`;

  return (
    <>
      <iframe
        src={url}
        // frameborder="0"
        allow="autoplay; encrypted-media"
        // allowfullscreen
        title="video"
      />
    </>
  );
};

export default VideoPlayer;
