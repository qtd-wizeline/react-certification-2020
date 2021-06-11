import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const IconButtonBase = styled.button`
  color: ${(props) => props.color || '#fff'};
  background-color: transparent;
  border: none;
  height: 32px;
  width: 32px;
  font-size: ${(props) => props.fontSize || '1rem'};
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

function IconButton(props) {
  return (
    <IconButtonBase color={props.color} fontSize={props.fontSize} {...props}>
      <FontAwesomeIcon icon={props.svgIcon} />
    </IconButtonBase>
  );
}

export default IconButton;
