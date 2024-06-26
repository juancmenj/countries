import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/App/App';
import reportWebVitals from './reportWebVitals';
//redux init
import { Provider } from 'react-redux';
import store from './reduxs/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
