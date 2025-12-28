import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'

import './index.css'
import App from './App'

import { store } from '@/store'

const root = createRoot(document.getElementById('root')!)
root.render(
  <BrowserRouter>
    <LastLocationProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LastLocationProvider>
  </BrowserRouter>,
)
