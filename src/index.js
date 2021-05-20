import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App.jsx';
import ThemeProvider from './components/ThemeProvider';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
