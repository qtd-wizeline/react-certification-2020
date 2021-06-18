import React from 'react';
import { Slider, Switch } from './ToggleSwitch.styled';

function ToggleSwitch(props) {
  const { toggled, onToggleCallback } = props;
  const onToggle = () => {
    onToggleCallback();
  };
  return (
    <Switch onClick={onToggle} toggled={toggled}>
      <Slider toggled={toggled} />
    </Switch>
  );
}

export default ToggleSwitch;
