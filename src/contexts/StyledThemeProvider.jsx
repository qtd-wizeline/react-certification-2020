import React, { createContext, useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../configs/themes';
import { ThemeReducer } from '../reducers/ThemeReducer';

const initState = {
  theme: themes.dark,
};

const ThemeContext = createContext(initState);

function StyledThemeProvider(props) {
  const [themeState, dispatch] = useReducer(ThemeReducer, initState);
  return (
    <ThemeContext.Provider value={[themeState, dispatch]}>
      <ThemeProvider theme={themeState.theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export { StyledThemeProvider, ThemeContext };
