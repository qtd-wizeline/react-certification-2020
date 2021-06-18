import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import './global.css';

import { StyledThemeProviderWrapper } from './utils/StyledThemeContextWrapper';

ReactDOM.render(
  <React.StrictMode>
    <StyledThemeProviderWrapper>
      <App />
    </StyledThemeProviderWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
