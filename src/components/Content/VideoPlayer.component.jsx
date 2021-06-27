import styled from 'styled-components';
import React from 'react';
import RelatedVideoItem from './RelatedVideItem.component';
import useFetch from '../../hooks/useFetch';

const VideoPlayer = (props) => {
  const uri = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&relatedToVideoId=${props.video.id}&type=video&videoType=any`;

  const { videoList } = useFetch(uri);

  const url = `https://www.youtube.com/embed/${props.video.id}`;

  return (
    <>
      <div>
        <iframe
          src={url}
          // frameborder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
        <CardContent>
          <h2>{props.video.title}</h2>
          <p>{props.video.description}</p>
        </CardContent>
      </div>

      <RelatedVideoList className="cards">
        {videoList ? (
          videoList.map((item) => {
            return (
              <RelatedVideoItem
                key={item.etag}
                id={item.id.videoId}
                title={item.snippet.title}
                description={item.snippet.description}
                thumbnails={item.snippet.thumbnails.high.url}
                onSelectVideo={props.onSelectVideo}
              />
            );
          })
        ) : (
          <></>
        )}
      </RelatedVideoList>
    </>
  );
};

const RelatedVideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
  align-items: stretch;
`;

const CardContent = styled.div`
  padding: 1.4em;

  & h2 {
    margin-top: 0;
    margin-bottom: 0.5em;
    font-weight: bold;
  }

  & p {
    font-size: 80%;
  }
`;

export default VideoPlayer;
