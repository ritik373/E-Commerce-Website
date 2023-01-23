import React, { Fragment } from 'react';
import './productItem.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dummy_data from './Dummy_data';
// import  Button  from "../UI/Button";
import Image from '../assets/vite.svg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const ProductItem = (props) => {
    return (<Fragment>
        <Container>
        <Row sm={2}>
        { Dummy_data.map((item)=>{
            return <div>
            
            <Card className="card" >
            <Card.Img  className="card-image" variant="top" src={item.imageUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
              <h5>${item.price}</h5>
              
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>

       
             </div>      
        }) }
        </Row>

        </Container>


       


        </Fragment>
    )
}

export default ProductItem;