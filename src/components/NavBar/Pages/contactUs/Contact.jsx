import React, { Fragment } from 'react';
import './contact.css'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const MovieForm = (props) => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [number,setNumber]=useState('');



    const onNameHandler = (event) => {
        setName(event.target.value)

    }
    const onEmailHandler = (event) => {
        setEmail(event.target.value)


    }
    const onMobileNumberHandler = (event) => {

        setNumber(event.target.value)


    }

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const ContactData={
        
            name: name,
            email: email,
            number: number,

        }

        fetch('https://react-http-movie-7299d-default-rtdb.firebaseio.com/contactus.json',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ContactData),

        })

        alert("We'll Contact You Soon ");
        console.log(ContactData);
        setName('');
        setEmail('');
        setNumber('');
        
    }

    return (<Fragment>
        <div className="formcard">
            <div className="header">
                <form action="" onSubmit={onSubmitHandler}>

                    <label htmlFor="t">Full Name</label><br />
                    <input type="text" width="100%" onChange={onNameHandler} value={name}/><br />
                    <label htmlFor="">Email Address</label><br />
                    <input type="email" name="" id="" onChange={onEmailHandler} value={email}/><br />
                    <label htmlFor="">Mobile Number</label><br />
                    <input type="text" name="" id="" onChange={onMobileNumberHandler} value={number}/><br />

                    <button>Submit</button>
        

                </form>

            </div>
        </div>
  <Outlet/>
    </Fragment>
    )
}

export default MovieForm;