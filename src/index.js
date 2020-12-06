import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import {BrowserRouter} from 'react-router-dom'
import PersonalThemeProvider from './theme/components/PersonalThemeProvider'
import GlobalProvider from './app/providers/GlobalProvider'

ReactDOM.render(
  <React.StrictMode>
      <GlobalProvider>
          <BrowserRouter>
              <PersonalThemeProvider>
                  <App/>
              </PersonalThemeProvider>
          </BrowserRouter>
      </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
