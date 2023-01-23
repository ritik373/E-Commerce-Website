import React,{Fragment} from 'react';
import "./Button.css"

const Button = (props) =>{

    return (
        <Fragment>
        <button
         className="button" onClick={props.onClick}>
        {props.children}
        </button>
        
        </Fragment>
    )
}
export default Button;