import React, { Fragment,useState } from 'react';
import Button from '../UI/Button'
import Modal from '../Model/Modal'
import AddToCartData from '../Cart/AddToCartData'
import {cartContext }from '../context/Cartprovider'
import { useContext } from 'react';


const AddToCart=()=>{

    const cartctx=useContext(cartContext);

    const totalitem=cartctx.items.reduce((accumulator,curritem)=>{
        return accumulator+1;
    },0)

    const [cart,setCart]=useState(false)

    const onCartHandler=()=>{
        setCart(true);
    }
    const onHideModalHandler=()=>{
        setCart(false);
    }
    return (
        <Fragment>
    
         <Button onClick={onCartHandler} > Cart <button>{totalitem}</button> </Button>
         {cart && <Modal onHideModal={onHideModalHandler}>
         <AddToCartData onHideModal={onHideModalHandler}/>
         </Modal>}
        
        </Fragment>
    )

}
export default AddToCart;