import React, { Fragment,useState } from 'react';
import Button from '../UI/Button'
import Modal from '../Model/Modal'
import AddToCartData from '../Cart/AddToCartData'
// import {cartContext }from '../context/Cartprovider'
// import { useContext } from 'react';
// import { useEffect } from 'react';

const AddToCart=()=>{
    // const lengthCart=useContext(cartContext);
    // const length=lengthCart.item.length;
    // const [length,setLength]=useState(0);

    // useEffect(()=>{
    //     setLength(lengthCart.item.length)

    // },[length])
    const [cart,setCart]=useState(false)

    const onCartHandler=()=>{
        setCart(true);
    }
    const onHideModalHandler=()=>{
        setCart(false);
    }
    return (
        <Fragment>
         <Button onClick={onCartHandler}> Cart 0</Button>
         {cart && <Modal onHideModal={onHideModalHandler}>
         <AddToCartData onHideModal={onHideModalHandler}/>
         </Modal>}
        
        </Fragment>
    )

}
export default AddToCart;