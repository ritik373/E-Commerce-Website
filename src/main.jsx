import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import CartProvider from '../src/components/context/Cartprovider';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthContextProvider from './components/Auth-context/AuthContextProvider'



ReactDOM.render(
   <div>
   <AuthContextProvider>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
      </BrowserRouter>
      </AuthContextProvider>
  
  
  </div> ,document.getElementById('root'));
 
