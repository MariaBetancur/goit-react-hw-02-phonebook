import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './index.styled.jsx';
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
