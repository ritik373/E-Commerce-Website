import React,{createContext,useContext} from 'react'
import { useReducer } from 'react';

const cartContext=createContext();

 const initialState={
     items:[],
     amount:0,
     totalCartItem:0,
 }

const reducer=(state,action)=>{
     if(action.type==="ADDTOCART"){

         state.amount=+state.amount + action.payload.price ;
       const updateTotal=state.amount/2;
       
        //  console.log(state.items);
        return {
            ...state,
            items:[...state.items,action.payload],
            TotalAmount:updateTotal,
       

        }
     }
     if (action.type==='REMOVETOCART'){
        //   console.log("clicked on remove button",action.payload);

          const RemoveItem=state.items.filter((currentItem)=>{
                return currentItem.id!=action.payload.id; 
          })
        return {
            ...state,
            items:RemoveItem,
            TotalAmount:state.TotalAmount-action.payload.price,

        };
        
     }

 }

const Cartprovider=(props)=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    
    const addToCart=(item)=>{
        dispatch({type:"ADDTOCART", payload:item})
    }

    const removeToCart=(item)=>{
        dispatch({type:"REMOVETOCART", payload : item})
    }
 

    return (<cartContext.Provider value={{...state,addToCart,removeToCart}}>
        {props.children}
        </cartContext.Provider>
    )


}


export  default Cartprovider;
export {cartContext};
