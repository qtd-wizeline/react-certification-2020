import React from 'react';
import { GlobalContextProvider } from './GlobalContextProvider';
import { StyledThemeProvider } from './StyledThemeProvider';

function CombinedContextProvider(props) {
  return (
    <GlobalContextProvider>
      <StyledThemeProvider>{props.children}</StyledThemeProvider>
    </GlobalContextProvider>
  );
}

export { CombinedContextProvider };
