import React from 'react';
import { StyledContainer } from './Container.styled';

export default function Container(props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}
