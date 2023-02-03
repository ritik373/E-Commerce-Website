import React, { Fragment,useContext } from 'react';
import './productItem.css'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {cartContext} from '../context/Cartprovider'

import {Link, Outlet} from 'react-router-dom';
function Items({id,title,price,quantity,imageUrl}) {

    const {addToCart} = useContext(cartContext);
    return (
        <div>

        <Card className="card" >
              <Card.Img className="card-image" variant="top" src={imageUrl} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  <h5>${price}</h5>
                </Card.Text>
                <Link to={`/detailproduct/${id}`} ><Button >View More</Button>
                </Link><Button variant="success" onClick={()=>{addToCart(id , title ,price , quantity, imageUrl)}}>
                Add to Cart</Button>
             
              </Card.Body>
            </Card>

            
        </div>
    );
}

export default Items;