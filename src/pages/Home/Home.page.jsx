import React, { useState } from 'react';
import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
import VideoPlayer from '../../components/Content/VideoPlayer.component';

import './Home.styles.css';

function HomePage() {
  const [input, setInput] = useState('wizeline');
  const [videoSelected, setVideoSeleted] = useState();

  const updateInput = async (search) => {
    console.log('UpdateInput: ', search);
    setInput(search);
  };

  const onSelectVideo = (id) => {
    setVideoSeleted(id);
    console.log('La id es: ', id);
  };

  return (
    <>
      <Header updateInput={updateInput} />
      {videoSelected == null ? (
        <Content onSelectVideo={onSelectVideo} input={input} />
      ) : (
        <VideoPlayer id={videoSelected} />
      )}
    </>
  );
}

export default HomePage;
