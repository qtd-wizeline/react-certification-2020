import React from 'react';
import styled from 'styled-components';

import CenteredImage from '../CenteredImage';

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

const ImgWrap = styled.div`
  position: relative;
  height: auto;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  display: inline-block;
  margin-bottom: inherit;
  bottom: 0;

  ${ImageHover}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

function Component(props) {
  return (
    <ImgWrap>
      <CenteredImage image={props.image} />
      <ImageHover>{props.hover_text}</ImageHover>
    </ImgWrap>
  );
}

export default Component;
