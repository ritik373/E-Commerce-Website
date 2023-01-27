import React from 'react';
import DummyData from '../Dummy_data';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './Showsingleitem.css'


const ShowUniqueDetailItem = (props) => {
    let { value } = useParams();
    // value=String(value);
    // console.log("param value id",typeof(value))
    const productMatch = DummyData.find((currValue) => currValue.id === value)
    // console.log(productMatch)


    return (
        <div>

            <Container>
                <Row>
                    <Col md={5}>
                    <div className="containerimage">
                    <img src={productMatch.imageUrl} alt={productMatch.title}  className="imageZoomFeature" />
                    </div>
                    </Col>
                    <Col md={7}>

                        <ListGroup>
                            <ListGroup.Item variant="success"><h1>{productMatch.title}</h1></ListGroup.Item>
                            <ListGroup.Item variant="primary"><h3>Amount ${productMatch.price}</h3></ListGroup.Item>
                            <ListGroup.Item action variant="secondary"> Quantity: {productMatch.quantity}</ListGroup.Item> </ListGroup>
                       <Row md={1}> 
                            <Col >
                            <div className="bottomConatiner">
                            <img  className="bottomImage" src={productMatch.imageUrl} alt=""/>
                            <img  className="bottomImage" src={productMatch.imageUrl} alt=""/>
                            <img  className="bottomImage" src={productMatch.imageUrl} alt=""/>
                            
                            </div>
                       
                          
                            
                            </Col>
                     </Row>
                     </Col>
      
      </Row>
   
    </Container>


           

        </div>
    )

}
export default ShowUniqueDetailItem;