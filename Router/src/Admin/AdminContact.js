import React, { useState } from 'react'

const AdminContact = () => {
  const [contactData,setContactData]=useState([]);
  const DeleteButton=()=>{

  }
  return (
    <div className="AdminContact">
    {contactData.map((item,index)=>{
        return(
          <div className="admincondata" key={index}>
               <h1>Username: {item.username}</h1>
               <h3>EmaiId: {item.email}</h3>
              <h3>Message: {item.message}</h3>
              <button className="ContactButton" onClick={()=>{
                DeleteButton(item._id)
              }}>Delete</button>
        </div>
        )
    })}
    
    </div>
  )
}

export default AdminContact
