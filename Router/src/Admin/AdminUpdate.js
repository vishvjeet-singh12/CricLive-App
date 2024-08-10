import React, { useContext, useEffect, useState } from 'react'
import "./AdminUpdate.css";
import { useNavigate, useParams } from 'react-router-dom';
import { UseContext } from '../Store/UseContext';
const AdminUpdate = () => {
    const [inputData,setInputData]=useState({
        username:"",
        email:"",
        mobile:""
    })
    const {Authorization}=useContext(UseContext);
    const navigate=useNavigate();
    const params=useParams();
    console.log("it is url's data wrt to params",params);
      
    const getEditedUser=async()=>{
        try {
            const response=await fetch(`http://localhost:3000/adRouter/ad/user/${params.id}`,{
                method:"GET",
                headers:{
                    Authorization:Authorization
                }
            });
            const data=response.json().then((result)=>{
                if(response.status === 200){
                    console.log(result.data);
                    setInputData(result.data);
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getEditedUser();
    },[]);

    const DataSubmit= async(event)=>{
        event.preventDefault();
        try {
            const response=await fetch(`http://localhost:3000/adRouter/ad/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:Authorization
                    
                },
                body:JSON.stringify(inputData)
            });
            const data=response.json().then((result)=>{
                if(response.status === 200){
                    console.log(result.message);
                    alert(result.message);
                    navigate("/admin/user");
                }else{
                    alert("Updation Rejected");
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
     const handlechange=(event)=>{
         let name=event.target.name;
         let value=event.target.value;

         setInputData({
            ...inputData,
            [name]:value
         })
     }
  return (
    <section className="AdminUpdate" style={{padding:"10px"}}>
    <div className="UpdateContainer">
       <div>
         <h1 style={{textAlign:"center",color:"sandybrown"}}>UPDATE USER DATA</h1><hr></hr>
       </div>
         <div className="UpdateForm">
            <form onSubmit={DataSubmit}>
               <label>Username</label>
               <input className="input" type="text" placeholder='Username' name="username" value={inputData.username} onChange={(event)=>{
                   handlechange(event);
               }}/>
               <br/><br/>
               
               <label>Email</label>
                 <input className="input" placeholder='Email' style={{backgroundColor:"white",padding:"15px"}} type="email" name="email" value={inputData.email} onChange={(event)=>{
                  handlechange(event);
              }}/>
                 <br/><br/>

                 <label>Mobile</label>
                 <input className="input" placeholder='MobileNo' type="text" name="mobile" value={inputData.mobile} onChange={(event)=>{
                  handlechange(event);
              }}/><br/><br/>
                 <button style={{padding:"5px 10px 5px 10px"}}>Update</button>
            </form>
         </div>
    </div>
 </section>
  )
}

export default AdminUpdate
