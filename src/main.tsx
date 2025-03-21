import React from "react";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './style/globalStyle.ts'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
