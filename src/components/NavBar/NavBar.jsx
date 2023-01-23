import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./NavBar.css"
import AddToCart from '../UI/AddToCart';



const NavBar=()=>{
    return (
        <React.Fragment>
   
        <Navbar bg="primary" variant="primary" className="navbar-min">
        <Container >
          <Navbar.Brand href="#home"  style={{color:"white"}} >E-Commerce Store</Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link href="#home"  style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#features"  style={{color:"white"}}>Store</Nav.Link>
            <Nav.Link href="#pricing"  style={{color:"white"}}>About us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="addtocart">
      <AddToCart />
      
      </div>
   
   
     
     </React.Fragment>
     )
    }
      
export default NavBar;