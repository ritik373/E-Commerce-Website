import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import './Modal.css';

const BackDrop=(props)=>{
    return <div className="backdrop" onClick={props.onClick}></div>
}

const ModalOverLay=(props)=>{
    return  (
        <div className="ModalOverLayCart">
       <div>{props.children}</div>

        </div>
    )
}
const PortalSender=document.getElementById('overlays');
const Modal=(props)=>{
    return <Fragment>
  {ReactDom.createPortal(<BackDrop onClick={props.onHideModal}/>,PortalSender)}
    {ReactDom.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,PortalSender)}
    
    </Fragment>
}

export default Modal;