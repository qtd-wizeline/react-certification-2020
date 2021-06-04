import React, { useState } from 'react';
import styled from 'styled-components';

const Switch = styled.div`
  width: 32px;
  height: 16px;
  padding: 4px;
  cursor: pointer;
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.toggled ? '#0b4d75' : '#bbb')};
  border-radius: 5rem;
  &:after {
    content: '';
    background-color: ${(props) => (props.toggled ? '#0c85d1' : '#eee')};
    border-radius: 5rem;
    height: 12px;
    width: 12px;
    left: ${(props) => (props.toggled ? '14px' : '-2px')};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: left 0.1s ease-in;
  }
`;

function ToggleSwitch() {
  const [toggled, setToggled] = useState(false);
  const onToggle = () => {
    setToggled((prev) => {
      return !prev;
    });
  };
  return (
    <Switch onClick={onToggle} toggled={toggled}>
      <Slider toggled={toggled} />
    </Switch>
  );
}

export default ToggleSwitch;
