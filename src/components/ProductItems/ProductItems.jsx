import React, { Fragment,useContext, useState } from 'react';
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
import Item from './Items'

const ProductItem = (props) => {
  const [data,setData]=useState(Dummy_data);

  const {addToCart} = useContext(cartContext);
  // const {singlePageProduct} = useContext(singleProductContext);
  







  return (<Fragment>
    <h1 className="header">Store</h1>
    <Container>
      <Row sm={2}>
        {data.map((item) => {
            return <Item key={item.id} {...item}/>
        })}
      </Row>
  </Container>
    <Outlet/>
  </Fragment>
  )
}

export default ProductItem;
// export {SinglePageProduct};