import React,{Fragment} from 'react';
import "./Button.css"
import { Outlet } from 'react-router-dom';

const Button = (props) =>{

    return (
        <Fragment>
        <button
         className="button" onClick={props.onClick}>
        {props.children}
        </button>

        <Outlet/>
        
        </Fragment>
    )
}
export default Button;