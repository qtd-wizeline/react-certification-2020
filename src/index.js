import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.css';
import SearchContextProvider from './contexts/SearchContextProvider';
import AppearanceContextProvider from './contexts/AppearanceContextProvider';


ReactDOM.render(
  <React.StrictMode>
    <AppearanceContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AppearanceContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
