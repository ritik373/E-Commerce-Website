import React, { Fragment } from 'react';
import './contact.css'
import { useState } from 'react';

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
        const MovieData={
        
            name: name,
            email: email,
            number: number,

        }

        fetch('https://react-http-movie-7299d-default-rtdb.firebaseio.com/contactus.json',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(MovieData),

        })

        alert("We'll Contact You Soon ");
        console.log(MovieData);
        setName('');
        setEmail('');
        setNumber('');
        
    }

    return (<Fragment>
        <div className="formcard">
            <div className="form">
                <form action="" onSubmit={onSubmitHandler}>

                    <label htmlFor="t">Name</label><br />
                    <input type="text" width="100%" onChange={onNameHandler} value={name}/><br />
                    <label htmlFor="">Email</label><br />
                    <input type="email" name="" id="" onChange={onEmailHandler} value={email}/><br />
                    <label htmlFor="">Mobile Number</label><br />
                    <input type="text" name="" id="" onChange={onMobileNumberHandler} value={number}/><br />

                    <button>Submit</button>
        

                </form>

            </div>
        </div>

    </Fragment>
    )
}

export default MovieForm;