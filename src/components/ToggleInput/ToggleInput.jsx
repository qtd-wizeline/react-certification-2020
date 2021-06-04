import React, { forwardRef, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';

const ToggleInputLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
`;

const StyledToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledToggleInputSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 0;
    top: 50%;
    transform: translate3d(4px, -50%, 0);
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  ${({ checked }) => {
    if (checked) {
      return css`
        background-color: #2196f3;
        box-shadow: 0 0 1px #2196f3;
        &::before {
          transform: translate3d(26px, -50%, 0);
        }
      `;
    }
  }}
`;

export default forwardRef(function ToggleInput(
  { id, name, onChange, defaultChecked = false, ...rest },
  ref
) {
  const [checked, setChecked] = useState(defaultChecked);

  const onDoChange = useCallback(
    (e) => {
      e.target.checked = !e.target.checked;
      setChecked(!e.target.checked);
      if (typeof onChange === 'function') {
        onChange(e);
      }
    },
    [onChange]
  );

  return (
    <ToggleInputLabel htmlFor={id}>
      <StyledToggleInput
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        {...rest}
        onChange={onDoChange}
        ref={ref}
      />
      <StyledToggleInputSlider checked={checked} />
    </ToggleInputLabel>
  );
});
