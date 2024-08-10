import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Countrycard from './Countrycard';

 function CountryList() {
    const[country,setCountry]=useState([]);
     useEffect(()=>{
           axios.get("https://api.cricapi.com/v1/countries?apikey=df9914d2-fa2b-4cdc-bd0f-b06defecc4c9&offset=0").then((res)=>{
            console.log(res.data.data);
            setCountry(res.data.data);
           })
     },[])
  return (
    <div>
    <h1 style={{backgroundColor:"lightcyan",fontSize:"30px",padding:"20px",textAlign:"center",marginBottom:"10px"}}>Country List</h1>
    <div className='matchlist'>
    {country.map((list)=>{
        return(
            <Countrycard data={list}/>
        )
    })}
    </div>  
    </div>
  )
}
export default CountryList
