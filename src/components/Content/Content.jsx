import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';

const API_KEY = 'AIzaSyAQq4ddc33VJkJjV21wm4u-qvgGwEkdHmo';

const Content = (props) => {
  const [videoList, setVideoList] = useState();

  // const loadVideos = (list) => {
  //   console.log('Esto es la lista', list);
  //   console.log('Esto es el etag', list.etag);
  //   if (list) {
  //     console.log('entra');
  //     setVideoList(
  //       list.items.map((item) => {
  //         return (
  //           <CardItem
  //             key={item.etag}
  //             id={item.id}
  //             title={item.snippet.title}
  //             description={item.snippet.description}
  //             thumbnails={item.snippet.thumbnails.high.url}
  //             onSelectedVideo={props.onSelectedVideo}
  //           />
  //         );
  //       })
  //     );
  //   }
  // };

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${props.input}%202&type=video&videoType=any&key=${API_KEY}`
      );
      const youtubeSearch = await response.json();
      // setVideoList(youtubeSearch);
      console.log(youtubeSearch);
      // loadVideos(youtubeSearch);
      if (youtubeSearch) {
        console.log('entra');
        setVideoList(
          youtubeSearch.items.map((item) => {
            return (
              <CardItem
                key={item.etag}
                id={item.id.videoId}
                title={item.snippet.title}
                description={item.snippet.description}
                thumbnails={item.snippet.thumbnails.high.url}
                onSelectVideo={props.onSelectVideo}
              />
            );
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  }, [props.input, props.onSelectVideo]);

  useEffect(() => {
    fetchData();
  }, [fetchData, props.input]);

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
