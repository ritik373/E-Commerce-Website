import React, { Fragment,useEffect,useState } from 'react';
import Button from '../UI/Button'
import Modal from '../Model/Modal'
import AddToCartData from '../Cart/AddToCartData'
import {cartContext }from '../context/Cartprovider'
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';


const AddToCart=()=>{

    const cartctx=useContext(cartContext);
    // const {counter}=useContext(cartContext);
    const [itemcartTotallength,setItemCartTotallength]=useState(0);
    const [itemcartTotallengthdec,setItemCartTotallengthdec]=useState(0);
    const [cart,setCart]=useState(false)



    useEffect(()=>{

        fetch('https://crudcrud.com/api/e05dfb4d1c7b426bad0af8795198449d/addTocart', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then((res) => {
            return res.json();
        }).then((data) => {
            // console.log(data)
            setItemCartTotallength(data.length);
         });

    },[cart])

   


  
    // setItemCartTotallength(totalitem-1)

    const totalitem=cartctx.items.reduce((itemcartTotallength,curritem)=>{ 
        return itemcartTotallength+1;
    },itemcartTotallength)


    const onCartHandler=()=>{
        setCart(true);
    }
    const onHideModalHandler=()=>{
        setCart(false);
    }
    return (
        <Fragment>
    
         <Button onClick={onCartHandler} > Cart <button>{ totalitem|| itemcartTotallength }</button> </Button>
         {cart && <Modal onHideModal={onHideModalHandler}>
         <AddToCartData onHideModal={onHideModalHandler}/>
         </Modal>}
        <Outlet/>
        </Fragment>
    )

}
export default AddToCart;