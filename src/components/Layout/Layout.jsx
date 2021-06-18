import React from 'react';
import Header from '../Header';
import { PageBody, StyledLayout } from './Layout.styled';

function Layout(props) {
  return (
    <StyledLayout>
      <Header />
      <PageBody>{props.children}</PageBody>
    </StyledLayout>
  );
}

export default Layout;
