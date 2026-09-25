import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import faviconUrl from './images/portfolio-logo1.webp'
import './App.css'

const favicon = document.createElement('link')
favicon.rel = 'icon'
favicon.type = 'image/webp'
favicon.href = faviconUrl
document.head.appendChild(favicon)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
