import React, { Fragment,useContext } from 'react';
import './productItem.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dummy_data from './Dummy_data';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useContext } from 'react';
import {cartContext} from '../context/Cartprovider'
import {Link, Outlet} from 'react-router-dom';

const ProductItem = (props) => {

  const {addToCart} = useContext(cartContext);
  // const {singlePageProduct} = useContext(singleProductContext);
  







  return (<Fragment>
    <h1 className="header">Store</h1>
    <Container>
      <Row sm={2}>
        {Dummy_data.map((item) => {
          return <div>
            <Card className="card" >
              <Card.Img className="card-image" variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  <h5>${item.price}</h5>
                </Card.Text>
                <Link to={`/detailproduct/${item.id}`} ><Button >View More</Button>
                </Link><Button variant="success" onClick={addToCart.bind(null,item)}>
                Add to Cart</Button>
             
              </Card.Body>
            </Card>


          </div>
        })}
      </Row>
  </Container>
    <Outlet/>
  </Fragment>
  )
}

export default ProductItem;
// export {SinglePageProduct};