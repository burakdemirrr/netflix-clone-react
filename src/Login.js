import React, { useRef } from 'react'
import { login, signup, useAuth } from './firebase';
import './Login.css'
import { useNavigate } from 'react-router-dom';
function Login({user,setUser}) {
  const navigate = useNavigate();

    const emailRef=useRef();
    const passwRef=useRef();

    const currentUser = useAuth();

  async function handleSignup() {
    try {
      await signup(emailRef.current.value, passwRef.current.value);
      navigate("/home")
    }
    catch(error) {
      alert(error);
    }
  }

  async function handleLogin() {
    try {
      await login(emailRef.current.value, passwRef.current.value); 
      navigate("/home")
    }
    catch(error) {
      alert(error);
    }
   
  }


    return (
        <div className="login">
            <div className="nav">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix-Logo" onClick={()=>navigate("/")}/>
            </div>
            <div className="box">
                <div className="box_content">
                <h1>Sign In</h1>
                <input type="email" ref={emailRef} className="box_email" placeholder="Email or phone number"/>
                
                <input type="password" ref={passwRef} className="box_password" placeholder="Password"/>
                
                <button type="submit" onClick={handleLogin}   className="box_button">Sign In</button>
                
                <div className="face">
                    <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" />
                    <p>Login with Facebook</p>
                </div>
                
                <h2 onClick={()=>navigate("/signup")} > New to Netflix? <span className="span_one" >Sign up now.</span> </h2>

                <p className="pi">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="span_two">Learn more.</span></p>
                </div>
            </div>

        </div>
    )
}

export default Login
