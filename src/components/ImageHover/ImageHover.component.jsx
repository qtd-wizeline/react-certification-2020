import React from 'react';
import styled from 'styled-components';

const ImageHover = styled.p`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(29, 106, 154, 0.72);
  color: #fff;
  visibility: hidden;
  height: auto;
  opacity: 0;
  text-align: center;

  /* transition effect. not necessary */
  transition: opacity 0.2s, visibility 0.2s;
  margin-top: 0;
  margin-bottom: 0;
`;

function Component(item) {
  return <ImageHover>{item.snippet.description}</ImageHover>;
}

export default Component;
