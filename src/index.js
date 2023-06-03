import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import './assets/fonts/Starjedi.ttf';
import './assets/fonts/AurebeshDroid.ttf';
import { LastLocationProvider } from 'react-router-last-location';

ReactDOM.render(
  <BrowserRouter>
    <LastLocationProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LastLocationProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
