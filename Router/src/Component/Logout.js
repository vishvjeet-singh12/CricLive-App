import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { UseContext } from '../Store/UseContext';

const Logout = () => {
    const {LogoutUser}=useContext(UseContext);
    useEffect(()=>{
        LogoutUser();
    },[LogoutUser]);
  return (
    <Navigate to="/"/>
  )
}

export default Logout;
