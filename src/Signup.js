import React, { useRef } from 'react'
import { useNavigate } from 'react-router';
import { signup, useAuth } from './firebase';

import './Signup.css'

function Signup() {

    const navigate = useNavigate();

    const emailRef=useRef();
    const passwRef=useRef();

    const currentUser = useAuth();
    const handleSignUp= async ()=>{
        try{
            await signup(emailRef.current.value,passwRef.current.value);
            alert("You are signed up.");
            navigate("/home");

        }
        catch{
            alert("error");
        }
    }


    return (
        <div className="login">
            <div className="nav">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix-Logo" onClick={()=>navigate("/")}/>
            </div>
            <div className="box">
                <div className="box_content">
                <h1>Sign Up</h1>
                <input type="email" ref={emailRef}className="box_email" placeholder="Email or phone number"/>
                
                <input type="password" ref={passwRef} className="box_password" placeholder="Password"/>
                
                <button type="submit"   onClick={handleSignUp} className="box_button">Sign Up</button>
                
                
                

                <p className="pi">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="span_two">Learn more.</span></p>
                </div>
            </div>

        </div>
    )
}

export default Signup
