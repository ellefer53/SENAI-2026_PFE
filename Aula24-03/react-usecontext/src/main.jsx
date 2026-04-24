import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import { TemaProvedor } from './contextos/temaContexto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TemaProvedor>
      <App />
    </TemaProvedor>
  </StrictMode>,
)
