import React, { useContext, useState } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { UseContext } from "../Store/UseContext";

const Login = () => {
  const [login, setLogin] = useState({
       email: "",
    password: "",
  });
  const navigate=useNavigate();
  const {storageTokenLs}=useContext(UseContext);

     const handleChange=(event)=>{
        let name=event.target.name;
        let value=event.target.value;

        setLogin({
          ...login,
          [name]:value,
        })
     }
       const handleSubmit= async(e)=>{
         e.preventDefault();
         console.log(login);  
         try {
          const response=await fetch("http://localhost:3000/api/login",{
            method:"Post",
            headers:{
            "Content-Type":"application/json",
            },
            body:JSON.stringify(login),
            credentials:"include"
           })
           const data=await response.json().then((result)=>{
                 console.log(result.message);

                 if(response.status === 200){
                    alert(result.message);
                    if(result.message === "Successfully logged in"){
                          storageTokenLs(result.token);
                          navigate("/currentmatch")       
                    }
                    if(result.message === "User Not Exist" || result.message === "Invalid Email Or Password"){
                      setLogin({email:"",password:""})
                    }
                 }
                 else{
                  alert(result.message);
                 }
           })
         } catch (error) {
          console.log(error);
          alert(error);
         }
        
       }
  return (
    <div
      className="loginform"
      style={{
        backgroundImage:
          "url(https://t3.ftcdn.net/jpg/01/97/33/46/360_F_197334647_aClfAIrrc0RPrsC8V52RN4MkzNmQCysc.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="background"></div>
      <div className="login-container" id="loginContainer">
        <div className="login-header">
          <h2>
            Welcome to <span>Cricket11</span>
          </h2>
          <p style={{ fontWeight: "bold" }}>Login to your account</p>
        </div>
        <div className="login-form">
          <form action="#" onSubmit={handleSubmit}>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                required
                value={login.email}
                onChange={(event) => {
                  handleChange(event);
                }}
              />
            </div>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={login.password}
                onChange={(event) => {
                  handleChange(event);
                }}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="signup-link" style={{fontWeight:"bold"}}>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
