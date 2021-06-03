import React, { useState, useEffect } from 'react';

import { VideoCard } from '../General/index';
import data from '../../data/data';

import './Content.styles.css';

export function Content() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    setVideoList(data.items);
  }, []);

  return (
    <div className="main">
      <h1>Welcome to the Challenge!</h1>
      <div className="video-container">
        {videoList.map((video) => (
          <VideoCard item={video} key={video.etag} />
        ))}
      </div>
    </div>
  );
}
