import React from 'react'
import './App.css';
import Modal from './components/Model/Modal'
import ProductItem from '../src/components/ProductItems/ProductItems'
import Navbar from '../src/components/NavBar/NavBar'
import AboutUs from './components/NavBar/Pages/AboutUs'
import Home from './components/NavBar/Pages/Home'
import Contact from './components/NavBar/Pages/contactUs/Contact'
import SinglePageProduct from '../src/components/ProductItems/SaprateItemsDeatail/ShowUniqueDetailItem'
import Authenticationform  from '../src/components/Auth/AuthForm'
import { authContext } from './components/Auth-context/AuthContextProvider';

// import  from './components/NavBar/Pages/AboutUs'
import { Route, BrowserRouter as Router, Routes, createBrowserRouter } from 'react-router-dom';
import { useContext } from 'react';






function App(props) {
  const AuthContext=useContext(authContext);

  const showPageSetUp=AuthContext.isLoggedIn;



  return (
    <React.Fragment>
      <Navbar />

     <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/home" element={showPageSetUp &&<Home />  || !showPageSetUp&& <h1 style={{fontSize:'100px'}}>404 PAGE NOT FOUND</h1>} />
          <Route path="/" element={<Authenticationform/>} />
          <Route path="/contact" element={showPageSetUp && <Contact/> || !showPageSetUp && <h1 style={{fontSize:'100px'}}>404 PAGE NOT FOUND</h1>} />
          <Route path='/store' element={showPageSetUp&&<ProductItem/> || !showPageSetUp && <h1 style={{fontSize:'100px'}}>404 PAGE NOT FOUND</h1>}/>

          <Route path='/detailproduct/:value' element={showPageSetUp &&<SinglePageProduct /> || !showPageSetUp&& <h1 style={{fontSize:'100px'}}>404 PAGE NOT FOUND</h1>}/>
       </Routes>


  



    </React.Fragment>
  )


}

export default App
