import React, { useState } from 'react';
import Content from '../../components/Content/Content';
import Header from '../../components/Header/Header';

import './Home.styles.css';

const API_KEY = 'AIzaSyC2DT9LFqJDeTAd9Kdj73B9ecG9MJyrh-g';

function HomePage() {
  const [input, setInput] = useState('');

  const fetchData = async (search) => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}%202&type=video&videoType=any&key=${API_KEY}`
      );
      const youtubeSearch = await response.json();
      setInput(youtubeSearch);
      console.log(youtubeSearch);
    } catch (error) {
      console.log(error);
    }
  };

  const updateInput = async (search) => {
    console.log('UpdateInput: ', search);
    fetchData(search);
  };

  return (
    <>
      <Header updateInput={updateInput} />
      <Content videoList={input} />
    </>
  );
}

export default HomePage;
