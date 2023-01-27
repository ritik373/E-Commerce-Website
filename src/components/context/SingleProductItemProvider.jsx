// import React,{createContext,useContext} from 'react'
// import ShowSingleProduct from '../ProductItems/SaprateItemsDeatail/ShowUniqueDetailItem'
// import { useReducer } from 'react';

// const singleProductContext=createContext();

// const initialState=0;


//  const reducer=(state,action)=>{
//      if(action.type==="SINGLE--PRODUCT"){
//          console.log(action.payload.title);
//          return <ShowSingleProduct  singleItem={action.payload} />
//      }
//  }
// const SingleProductItemProvider=(props)=>{

//     const [state,dispatch]=useReducer(reducer,initialState);

       
//     const singlePageProduct=(item)=>{
//     //    console.log(item)
//         dispatch({type:"SINGLE--PRODUCT", payload : item})
        
//     }

//     return <singleProductContext.Provider value={{singlePageProduct}}>
//     {props.children}
//     </singleProductContext.Provider>
    
// }

// export default SingleProductItemProvider;
// export {singleProductContext}