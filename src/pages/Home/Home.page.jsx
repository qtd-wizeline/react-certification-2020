import React, { useContext } from 'react';
import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';
import VideoPlayer from '../../components/Content/VideoPlayer.component';
import YoutubeVideosContext from '../../components/state/YoutubeVideosContext';

import './Home.styles.css';

function HomePage() {
  const { videoSelected } = useContext(YoutubeVideosContext);

  return (
    <>
      <Header />
      {videoSelected == null ? <Content /> : <VideoPlayer video={videoSelected} />}
    </>
  );
}

export default HomePage;
