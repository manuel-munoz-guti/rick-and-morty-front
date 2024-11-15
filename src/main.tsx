import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RickAndMortyProvider } from 'rick-and-morty-lib';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RickAndMortyProvider >
      <App />
    </RickAndMortyProvider>
  </StrictMode>,
)
