import React from 'react';
import styled from 'styled-components';

const Spinner = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  height: fit-content;
`;

const loadingGifUrl =
  'https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif';

function LoadingSpinner() {
  return <Spinner src={loadingGifUrl} />;
}

export default LoadingSpinner;
