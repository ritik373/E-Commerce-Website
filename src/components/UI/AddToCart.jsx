import React, { Fragment,useState } from 'react';
import Button from '../UI/Button'
import Modal from '../Model/Modal'
import AddToCartData from '../Cart/AddToCartData'

const AddToCart=()=>{
    const [cart,setCart]=useState(false)

    const onCartHandler=()=>{
        // console.log("clicked")
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