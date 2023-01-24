import React from 'react'
import './App.css';
import Modal from './components/Model/Modal'

// import Showproduct from './components/ProductItems/'


import ProductItem from '../src/components/ProductItems/ProductItems'




import Navbar from '../src/components/NavBar/NavBar'



function App() {


  return (
     <React.Fragment>

     <Navbar/>
       <h1 className="header">PrOdUcTs</h1>
     <ProductItem />



  </React.Fragment>
  )
   
  
}

export default App
