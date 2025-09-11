import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThreadContextProvider } from './context/threadContext.tsx'
import { UserContextProvider } from './context/usercontext.tsx'

//import { initLocalStorage } from './utils/initLocalStorage.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThreadContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ThreadContextProvider>
  </StrictMode>,
)
