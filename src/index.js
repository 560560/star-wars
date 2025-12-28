import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { LastLocationProvider } from 'react-router-last-location';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LastLocationProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LastLocationProvider>
  </BrowserRouter>
);
