import React, { useContext } from 'react';
import styled from 'styled-components';
import YoutubeVideosContext from '../state/YoutubeVideosContext';

const CardItem = (props) => {
  const { state, dispatch } = useContext(YoutubeVideosContext);
  const { theme } = state;

  const setVideoSelected = (videoSelected) => {
    dispatch({ type: 'SET_VIDEOSELECTED', payload: videoSelected });
  };

  return (
    <>
      <Card
        fontColor={theme.ContentFontColor}
        backgr={theme.CardBackground}
        onClick={() =>
          setVideoSelected({
            id: props.id,
            title: props.title,
            description: props.description,
          })
        }
      >
        {/* <a href="https://www.google.com/"> */}
        <Image src={props.thumbnails} alt="error" />
        <CardContent>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </CardContent>
        {/* </a> */}
      </Card>
    </>
  );
};

const Image = styled.img`
  max-width: 100%;
`;

const Card = styled.div`
  background: ${(props) => props.backgr};
  margin-bottom: 2em;
  border-radius: 20px;
  flex: 0 1 23%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: ${(props) => props.fontColor};

  & a {
    color: black;
    text-decoration: none;
  }

  & hover {
    box-shadow: 3px 3px 8px hsl(0, 0%, 80%);
  }
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

export default CardItem;
