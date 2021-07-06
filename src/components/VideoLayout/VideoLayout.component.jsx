import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;
  margin-right: 0px;
  overflow: auto;
`;

function VideoLayout({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

export default VideoLayout;
