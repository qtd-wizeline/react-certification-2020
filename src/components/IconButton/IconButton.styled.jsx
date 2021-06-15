import styled from 'styled-components';

export const StyledIconButton = styled.button`
  color: ${(props) => props.color ?? props.theme.text};
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
