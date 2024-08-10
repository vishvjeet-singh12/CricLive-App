import React, { useState } from "react";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [register, setRegister] = useState({
    username: "",
    email:"",
    password: "",
    mobile:""
  });
  const navigate=useNavigate();
  const handleRegister = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setRegister({
      ...register,
      [name]: value,
    });
  };
  const registerSubmit = async(e) => {
    e.preventDefault();
    console.log(register);
    try {
      const response=await fetch("http://localhost:3000/api/register",{
        method:"Post",
        headers:{
           "Content-Type":"application/json",
        },
        body:JSON.stringify(register),
        credentials:"include"
      })
       const data=await response.json().then((result)=>{
        console.log(result.message)
              if(response.status=== 200){
                alert(result.message);
                if(result.message === "SuccessFully Registered" ||
                         result.message === "User Already Exist"){
                        navigate("/login")
                }
              }else{
                alert(result.extraDetails)
              }
       })
    } catch (error) {
       console.log(error);
    }
    
  };
  return (
    <div
      className="registercss"
      style={{
        backgroundImage:
          "url(https://t3.ftcdn.net/jpg/01/97/33/46/360_F_197334647_aClfAIrrc0RPrsC8V52RN4MkzNmQCysc.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundAttachment: "fixed",
      }}
    >
      <form onSubmit={registerSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>

          <label >
            <b>Username</b>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            required
            value={register.username}
            onChange={(event)=>{
              handleRegister(event);
            }}
          />
          <label >
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" 
         value={register.email} name="email" required
          onChange={(event)=>{
            handleRegister(event);
          }} />

          <label >
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={register.password}
            required
            onChange={(event)=>{
              handleRegister(event);
            }}
          />

          <label >
            <b>Phone Number</b>
          </label>
          <input type="phone" name="mobile" value={register.mobile} required  onChange={(event)=>{
            handleRegister(event);
          }} />
          <div className="clearfix">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
          <div className="signup-link" style={{fontWeight:"bold"}}>
          Have an account? <Link to="/login">Sign in</Link>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
