import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.main`
  width: 99vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;
`;

function Layout({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

export default Layout;
