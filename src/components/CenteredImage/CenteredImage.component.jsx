import React from 'react';
import styled from 'styled-components';

const CenteredImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  height: fit-content;
`;

function Component(props) {
  return <CenteredImage src={props.image} />;
}

export default Component;
