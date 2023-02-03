import React, { useContext } from 'react';
import classes from './Cart.module.css'
// import dummy from '../ProductItems/Dummy_data'
// import {initialState} from '../context/Cartprovider'
import { cartContext } from '../context/Cartprovider'
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

let sum = 0;
const AddToCartData = (props) => {
    const { removeToCart } = useContext(cartContext);
    const [cartData, setCartData] = useState([]);

    const [totalPrice, setTotalPrice] = useState(sum);
    // let storedata=[];


    useEffect(() => {
        fetch('https://crudcrud.com/api/45756a8eaa75461aaa8d14e69f766131/addTocart', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then((res) => {
            return res.json();
        }).then((data) => {
            setCartData(data);
            // storedata.push(data)
            // console.log(data)
          const totaldataitemAmount=  data.reduce((acc,curritem)=>{
                return acc+curritem.item.price;
            },0)
            setTotalPrice(totaldataitemAmount)
            // removeToCart(data.item._id);

  

    });
    
},[])

// const removeToCart = (id) => {

//     console.log("clicked in delete item", id)

        
//         fetch(`https://crudcrud.com/api/305cbe993058414e8aa4225610d3b283/addTocart/${id}`, {
//             method: 'DELETE',
//             headers: { 'Content-Type': 'application/json' }
//         })
     





// }


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
            {
                cartData.map((currItem) => {
                    // const id=currItem._id
                    // console.log(id)

                    return <tr>
                        <td><img src={currItem.item.imageUrl} alt="" width="80px" height="80px" /></td>
                        <td>{currItem.item.title}</td>
                        <td>${currItem.item.price}</td>
                        <td>{currItem.item.quantity}</td>
                        <td><button style={{ color: "white", backgroundColor: "blue" }}
                            onClick={() => removeToCart(currItem)}>Remove Item</button></td>
                    </tr>

                })

            }
        </table>
        <div className={classes.total}>
            <span>Total Amont</span>
            <span>{totalPrice}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideModal}>close</button>
            <button className={classes.button} >Order</button>
        </div>

        <Outlet />
    </div>
)

}
export default AddToCartData;