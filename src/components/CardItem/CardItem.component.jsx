import React from 'react';
import styled from 'styled-components'

// import { useFortune } from '../../utils/hooks/useFortune';
import './CardItem.styles.css';

const CardItem = styled.div`
  height: 330px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 5px;
  flex-basis: calc(20% - 22px);
  position: relative;
`;

function CardItem(item) {
  return (
    <div className="card-item" key={item.etag}>
      <div className="card-title">
        <h4>{item.snippet.title}</h4>
      </div>
      <div className="img__wrap">
        <img className="center" src={item.snippet.thumbnails.medium.url} />
        <p className="img__description">{item.snippet.description}</p>
      </div>
    </div>
  );
}

export default CardItem;
