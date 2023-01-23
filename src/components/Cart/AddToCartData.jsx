import React from 'react';
import classes from'./Cart.module.css'

const AddToCartData=(props)=>{
    return (
        <div>
        <li className={classes['cart-item']}>
        <div>
          <h2>ritik</h2>
          <div className={classes.summary}>
            <span className={classes.price}>$34</span>
            <span className={classes.amount}>0</span>
        
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemove} >-</button>
          <button onClick={props.onAdd } >+</button>
        </div>
      </li>

      <div className={classes.total}>
      <span>Total Amont</span>
      <span>0</span>

  </div>
  <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onHideModal}>close</button>
       <button className={classes.button} >Order</button>
  </div>
  </div>
    );
    
}
export default AddToCartData;