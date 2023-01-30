import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./NavBar.css"
import AddToCart from '../UI/AddToCart';
import {Link , NavLink, useNavigate} from 'react-router-dom';
import { authContext } from '../Auth-context/AuthContextProvider';
import { useContext } from 'react';




const NavBar=()=>{
  const navigate=useNavigate();
  const AuthContext=useContext(authContext);

  const showNavbarOption=AuthContext.isLoggedIn;



  const onLoginHandler=()=>{
    console.log("clicked on login buttton")
    navigate('/',{replace:true})


  }
  const onLogOutHandler=()=>{
    navigate('/',{replace:true})
    AuthContext.isLogOut();
  }
    return (
        <React.Fragment>
   
        <Navbar bg="primary" variant="primary" className="navbar-min">
        <Container >
          <Navbar.Brand href="#home"  style={{color:"white"}} > <NavLink   >E-Commerce Store</NavLink></Navbar.Brand>
          <Nav className="me-auto" >
           { showNavbarOption && <NavLink   activeClassName="active_class" to="/home"  >Home</NavLink> }
          {showNavbarOption &&  <NavLink   activeClassName="active_class" to="/store"  >Store</NavLink>}
            <NavLink   activeClassName="active_class" to="/about" >About us</NavLink>
          { showNavbarOption && <NavLink   activeClassName="active_class" to="/contact" >Contact us</NavLink> }
            
          </Nav>
          
          {!showNavbarOption && <button style={{color:'white',width:'100px',height:'70px',borderRadius:'20px',backgroundColor:'blue'}} onClick={onLoginHandler}>Login</button>}
          {showNavbarOption && <button style={{color:'white',width:'100px',height:'70px',borderRadius:'20px',backgroundColor:'blue'}} onClick={onLogOutHandler}>LogOut</button> }
        </Container>
      </Navbar>

      <div className="addtocart">
      <AddToCart  />
      
      </div>
   
   
     
     </React.Fragment>
     )
    }
      
export default NavBar;