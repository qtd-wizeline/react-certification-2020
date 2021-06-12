import React from 'react';
import styled from 'styled-components';

const CardTitleText = styled.h4`
  color: black;
  font-size: 1em;
`;

function Component(props) {
  return <CardTitleText>{props.text}</CardTitleText>;
}

export default Component;
