import React from 'react';
import styled from 'styled-components';

const CenteredImageWrapper = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  height: fit-content;
`;

function CenteredImage(props) {
  return <CenteredImageWrapper src={props.image} />;
}

export default CenteredImage;
