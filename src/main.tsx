import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { EcLandingApp } from './EcLandingApp'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EcLandingApp />
  </StrictMode>,
)
