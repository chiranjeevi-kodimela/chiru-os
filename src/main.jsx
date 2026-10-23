import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/global.css';
import './styles/layout.css';
import './styles/home.css';
import './styles/about.css';
import './styles/skills.css';
import './styles/projects.css';
import './styles/contacts.css';
import './styles/responsive.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
