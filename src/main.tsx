import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThreadContextProvider } from './context/threadContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThreadContextProvider>
    <App />
    </ThreadContextProvider>
  </StrictMode>,
)
