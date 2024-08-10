import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./AdminUser.css"
import { UseContext } from '../Store/UseContext';
const AdminUser = () => {
  const [user,setUser]=useState([]);
  const {Authorization}=useContext(UseContext);
 
  const getAllUser=async()=>{
    try {
       const response=await fetch("http://localhost:3000/adRouter/apAllData",{
        method:"GET",
        headers:{
          Authorization:Authorization,
        }
       });
      const data=response.json().then((result)=>{
          if(response.status=== 200){
            console.log(result.users); 
            setUser(result.users);
          }
      })
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getAllUser();
  },[]);

  const  deleteButton=async(id)=>{
      try {
        const response=await fetch(`http://localhost:3000/adRouter//ad/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization:Authorization,
        }
       });
      const data=response.json().then((result)=>{
          if(response.status=== 200){
            console.log(result.message); 
            getAllUser();
          }
      })
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <div>
    <section style={{margin:"30px"}} className='AdminSection'>
    <table className="table">
       <thead className="thead">
         <tr style={{textAlign:"center"}}>
           <th>Name</th>
           <th>Email</th>
           <th>Phone</th>
           <th>Update</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody className="tbody" style={{textAlign:"center"}}>
       {user.map((data,index)=>{
        return(
          <tr key={index}>
          <td>{data.username}</td>
          <td>{data.email}</td>
          <td>{data.mobile}</td>
          <td><Link  to={`/admin/user/${data._id}/edit`} 
          className="AdminButton" style={{textDecoration:"none"}}>Edit</Link></td>
          <td><button className="AdminButton" onClick={()=>{
            deleteButton(data._id);
         }}>Delete</button></td>
        </tr>
        )
     })}
         
       </tbody>
  </table>
    </section>
</div>
  
  )
}

export default AdminUser
