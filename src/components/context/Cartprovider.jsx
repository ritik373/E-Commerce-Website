import React, { createContext, useEffect } from 'react'
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import Dummy_data from '../ProductItems/Dummy_data'


const cartContext = createContext();

const initialState = {
    items: [],
    amount: 0,
    totalCartItem: 0,
    counter:0,
    showdatainCart:false,
    


}

const reducer = (state, action) => {

    // const navigate=useNavigate();

    if (action.type === "ADDTOCART") {

        // state.counter.push(action.payload)



        //   let exitingItem= state.items.includes((currentItem)=>{
        //         return currentItem.id===action.payload.id;
        //     })
        //     console.log(exitingItem)
        // console.log(state.items);
        // console.log(action.payload.imageUrl);

        // if(action.payload.id)

        // useEffect(()=>{
        //     console.log("addd cart items")

        fetch('https://crudcrud.com/api/e05dfb4d1c7b426bad0af8795198449d/addTocart', {
            method: 'POST',
            body: JSON.stringify({ item: action.payload }),
            headers: { 'Content-Type': 'application/json' }
        });

        // },[])


        //  state.amount=+state.amount + action.payload.price ;
        //    const updateTotal=state.amount/2;


        return {
            ...state,
            items: [...state.items, action.payload],
            // TotalAmount: updateTotal,


        }
    }

    if (action.type === 'REMOVETOCART') {


        // console.log(action.payload)

        // useEffect(() => {
        fetch(`https://crudcrud.com/api/e05dfb4d1c7b426bad0af8795198449d/addTocart/${action.payload._id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        
        alert("Are you sure ");
        // navigate('\store',{replace:true})


        // }, [0])



      state.counter=state.counter+1;

        //   console.log("clicked on remove button",action.payload);

        // const RemoveItem = state.items.filter((currentItem) => {
        //     console.log(currentItem)
        //     // return currentItem._id!==action.payload.item.id;
        //     return currentItem.id!==action.payload.item.id; 
        // })
        return {
            ...state,
            items: state.items,
            counter:state.counter,
            // TotalAmount:state.TotalAmount-action.payload.price,

        };
    }
    // 
    // }

    // if (action.type === 'SINGLE--PRODUCT') {
    //     console.log("singlePageProduct", action.payload)
    //     return {
    //         ...state,
    //         items: state.items,
    //         TotalAmount: state.TotalAmount - action.payload.price,
    //     }

    // }

}

const Cartprovider = (props) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);


    const addToCart = (id, title, price, quantity, imageUrl) => {
        dispatch({ type: "ADDTOCART", payload: { id, title, price, quantity, imageUrl } })
    }

    const removeToCart = (item) => {
        dispatch({ type: "REMOVETOCART", payload: item })
    }

    // const singlePageProduct = (item) => {
    //     dispatch({ type: "SINGLE--PRODUCT", payload: item })

    // }


    return (<cartContext.Provider value={{ ...state, addToCart, removeToCart }}>
        {props.children}
    </cartContext.Provider>
    )


}


export default Cartprovider;
export { cartContext };
