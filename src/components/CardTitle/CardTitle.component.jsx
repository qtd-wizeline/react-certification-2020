import React from 'react';
import styled from 'styled-components';

// import { useFortune } from '../../utils/hooks/useFortune';
// import CardTitleText from '../CardTitleText';

const CardTitleDiv = styled.div`
  margin: 1px;
  height: 56px;
`;

const CardTitleText = styled.h4`
  color: black;
  font-size: 1em;
`;

function CardTitle(props) {
  return (
    <CardTitleDiv>
      <CardTitleText> {props.text} </CardTitleText>
    </CardTitleDiv>
  );
}

export default CardTitle;
