import React from 'react';
import styled from 'styled-components';

const RelatedVideoItem = (props) => {
  return (
    <>
      <Card
        onClick={() =>
          props.onSelectVideo({
            id: props.id,
            title: props.title,
            description: props.description,
          })
        }
      >
        <Image src={props.thumbnails} alt="error" />
        <CardContent>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </CardContent>
      </Card>
    </>
  );
};

const Image = styled.img`
  max-width: 100%;
`;

const Card = styled.div`
  background: white;
  margin-bottom: 2em;
  border-radius: 20px;
  flex: 0 1 23%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  & a {
    color: black;
    text-decoration: none;
  }

  & a:hover {
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

export default RelatedVideoItem;
