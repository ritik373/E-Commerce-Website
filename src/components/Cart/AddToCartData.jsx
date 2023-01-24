import React,{useContext}from 'react';
import classes from './Cart.module.css'
// import dummy from '../ProductItems/Dummy_data'
// import {initialState} from '../context/Cartprovider'
import {cartContext} from '../context/Cartprovider'


const AddToCartData = (props) => {

     const {items,TotalAmount,removeToCart}= useContext(cartContext); 
    return (
        <div>
        <table>
        <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
        </tr>
  
        
       
           {items.map((item)=>{

           return  <tr>
          <td><img src={item.imageUrl} alt="" width="80px" height="80px" /></td>
           <td>{item.title}</td>
           <td>${item.price}</td>
           <td>{item.quantity}</td>
           <td><button style={{ color: "white", backgroundColor: "blue"}}
            onClick={()=>removeToCart(item)}>Remove Item</button></td>
       </tr>

        })
         
        }
        </table>
       <div className={classes.total}>
                <span>Total Amont</span>
                <span>{TotalAmount}</span>
       </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideModal}>close</button>
                <button className={classes.button} >Order</button>
            </div>


</div>
)

}
export default AddToCartData;