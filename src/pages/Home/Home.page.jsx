import React, { useState } from 'react';
import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
import VideoPlayer from '../../components/Content/VideoPlayer.component';

import './Home.styles.css';

function HomePage() {
  const [videoSelected, setVideoSeleted] = useState();

  const onSelectVideo = (video) => {
    setVideoSeleted(video);
    console.log('El video seleccionado es: ', video);
  };

  return (
    <>
      <Header />
      {videoSelected == null ? (
        <Content onSelectVideo={onSelectVideo} />
      ) : (
        <VideoPlayer onSelectVideo={onSelectVideo} video={videoSelected} />
      )}
    </>
  );
}

export default HomePage;
