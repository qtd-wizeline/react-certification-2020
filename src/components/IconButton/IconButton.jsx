import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { StyledIconButton } from './IconButton.styled';

function IconButton(props) {
  return (
    <StyledIconButton color={props.color} fontSize={props.fontSize} {...props}>
      <FontAwesomeIcon icon={props.svgIcon} />
    </StyledIconButton>
  );
}

export default IconButton;
