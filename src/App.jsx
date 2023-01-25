import React from 'react'
import './App.css';
import Modal from './components/Model/Modal'
import ProductItem from '../src/components/ProductItems/ProductItems'
import Navbar from '../src/components/NavBar/NavBar'
import AboutUs from './components/NavBar/Pages/AboutUs'
import Home from './components/NavBar/Pages/Home'
// import  from './components/NavBar/Pages/AboutUs'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';



function App() {

  // const AboutUs = () => {
  //   return <h1>this is About us page</h1>
  // }

  return (
    <React.Fragment>
      <Navbar />

     <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<ProductItem/>} />
       </Routes>


  



    </React.Fragment>
  )


}

export default App
