import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
<<<<<<< HEAD
import { ThreadContextProvider } from './context/threadContext.tsx'
=======
import { initLocalStorage } from './utils/initLocalStorage.ts'

// Seed localStorage before React mounts
initLocalStorage();
>>>>>>> 0bddc4d6291a2c81ac7c00c465054419b187e03d

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThreadContextProvider>
    <App />
    </ThreadContextProvider>
  </StrictMode>,
)
