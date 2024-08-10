import { createContext, useEffect, useState } from "react";

export const UseContext=createContext();

const UseContextList=({children})=>{
    const [token,setToken]=useState(localStorage.getItem("token"));
    const [user,setUser]=useState("");
    const Authorization= `Bearer ${token}`;
    
    const storageTokenLs=(serverToken)=>{
      setToken(serverToken);
        return  localStorage.setItem("token",serverToken);
    }  
       const isLoggedIn= !!token;
       const LogoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token");
       }

       const Authentication=async()=>{
         try {
              const response=await fetch("http://localhost:3000/api/user",{
                method:"Get",
                headers:{
                     "Authorization":Authorization,
                }
              })
              const data=await response.json().then((result)=>{
                   if(response.status === 200){
                      console.log(result.userData);
                      setUser(result.userData)
                   }
              })
         } catch (error) {
            console.log(error);
         }
       }
       useEffect(()=>{
        Authentication();
       },[])
    return <UseContext.Provider value={{storageTokenLs,LogoutUser,isLoggedIn,user,Authorization}}>{children}</UseContext.Provider>
}
export default UseContextList;