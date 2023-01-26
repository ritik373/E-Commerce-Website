import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./NavBar.css"
import AddToCart from '../UI/AddToCart';
import {Link , NavLink} from 'react-router-dom';



const NavBar=()=>{
    return (
        <React.Fragment>
   
        <Navbar bg="primary" variant="primary" className="navbar-min">
        <Container >
          <Navbar.Brand href="#home"  style={{color:"white"}} > <NavLink to="/" >E-Commerce Store</NavLink></Navbar.Brand>
          <Nav className="me-auto" >
            <NavLink   activeClassName="active_class" to="/home"  >Home</NavLink>
            <NavLink   activeClassName="active_class" to="/"  >Store</NavLink>
            <NavLink   activeClassName="active_class" to="/about" >About us</NavLink>
            <NavLink   activeClassName="active_class" to="/contact" >Contact us</NavLink>
            
          </Nav>
        </Container>
      </Navbar>

      <div className="addtocart">
      <AddToCart  />
      
      </div>
   
   
     
     </React.Fragment>
     )
    }
      
export default NavBar;