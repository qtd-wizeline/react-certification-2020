import React from "react"
import styled from "styled-components"

const VideoWrapper = styled.div`
  border-radius: 5px;
  margin: auto;
  height: 480px;
  padding: 0 0 50 0;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const Title = styled.div`
  font-size: 2em;
  margin: auto;
  font-color:black;
  `;

function VideoCard({thumbnail,title,url}){
    return(
        <VideoWrapper>
            <Title>
                {title}
            </Title>
            <Title>
            <a href= {url?`https://www.youtube.com/watch?v=${url}`:null} >
            <img src={thumbnail}></img></a>
            </Title>
            
            
        </VideoWrapper>

    )
}

export default VideoCard;