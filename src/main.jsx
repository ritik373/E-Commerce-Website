import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CartProvider from '../src/components/context/Cartprovider';
import { BrowserRouter, Route, Routes } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
          <Route path="/about" />
          <Route path="/home"  />
          
        
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>

  </React.StrictMode>,
)
