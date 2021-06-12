import React from 'react';
import styled from 'styled-components';

import CenteredImage from '../CenteredImage';
import ImageHover from '../ImageHover';

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

  &:hover ${ImageHover} {
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
