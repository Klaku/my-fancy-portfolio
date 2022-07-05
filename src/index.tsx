import React from 'react';
import ReactDOM from 'react-dom/client';
import 'content/css/fonts.css';
import 'content/css/index.css';
import App from 'App/App';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
