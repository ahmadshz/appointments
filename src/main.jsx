import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/open-sauce-sans/500.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/open-sauce-sans/500.css';
import '@fontsource/inter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
