import React from 'react'
import './App.css';
import Modal from './components/Model/Modal'
import ProductItem from '../src/components/ProductItems/ProductItems'
import Navbar from '../src/components/NavBar/NavBar'
import AboutUs from './components/NavBar/Pages/AboutUs'
import Home from './components/NavBar/Pages/Home'
import Contact from './components/NavBar/Pages/contactUs/Contact'
import SinglePageProduct from '../src/components/ProductItems/SaprateItemsDeatail/ShowUniqueDetailItem'

// import  from './components/NavBar/Pages/AboutUs'
import { Route, BrowserRouter as Router, Routes, createBrowserRouter } from 'react-router-dom';






function App(props) {



  return (
    <React.Fragment>
      <Navbar />

     <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<ProductItem/>} />
          <Route path="/contact" element={<Contact/>} />

          <Route path='/detailproduct/:value' element={<SinglePageProduct  />}/>
       </Routes>


  



    </React.Fragment>
  )


}

export default App
