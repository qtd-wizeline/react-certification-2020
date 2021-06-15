import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../configs/themes';

const initState = {
  theme: themes.dark,
  toggle: () => {},
};

const ThemeContext = createContext(initState);

function StyledThemeProviderWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);
  const toggle = () => {
    if (theme.name === 'dark') {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export { StyledThemeProviderWrapper, ThemeContext };
