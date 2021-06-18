import styled from 'styled-components';
import IconButton from '../IconButton';

export const SearchInputContainer = styled.form`
  position: relative;
  height: 100%;
  input {
    padding-left: 12px;
    padding-right: 32px;
    /* border: solid 1px #ccc; */
    height: 100%;
  }
  input + div {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const SearchInputIconButton = styled(IconButton)`
  color: ${(props) => props.theme.fg};
`;
