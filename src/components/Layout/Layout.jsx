import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const StyledLayout = styled.main`
  min-height: 100vh;
  background-color: #181818;
`;

const PageBody = styled.div`
  display: flex;
`;

function Layout(props) {
  return (
    <StyledLayout>
      <Header />
      <h1>A text for testing purpose!</h1>
      <PageBody> {props.children}</PageBody>
    </StyledLayout>
  );
}

export default Layout;
