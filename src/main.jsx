import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { CardProvider } from './context/CardContext.jsx'
createRoot(document.getElementById('root')).render(
  <CardProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CardProvider>
)