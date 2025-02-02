import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
