import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { CombinedContextProvider } from './contexts/CombinedContextProvider';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <CombinedContextProvider>
      <App />
    </CombinedContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
