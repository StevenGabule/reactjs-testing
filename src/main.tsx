import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './CartContext/CartContext.js'
import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
</React.StrictMode>,
)
