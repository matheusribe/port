import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) return savedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const theme = getInitialTheme()
document.documentElement.classList.add(theme)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App initialTheme={theme} />
  </StrictMode>,
)
