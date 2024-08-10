import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CricketCard from './CricketCard';

const CricketScore = () => {
    const[matches,setMatches]=useState([]); 
    useEffect(()=>{
      axios.get("https://api.cricapi.com/v1/currentMatches?apikey=df9914d2-fa2b-4cdc-bd0f-b06defecc4c9&offset=0").then((res)=>{
        console.log(res.data.data);
        setMatches(res.data.data);
      })
    },[])
  return (
    <div>
    <h1 style={{backgroundColor:"lightcyan",fontSize:"30px",padding:"20px",textAlign:"center",marginBottom:"10px"}}>Current Matches List</h1>
    <div className='matchlist'>
    {matches.map((match)=>{
        return (  
            <CricketCard data={match}/>
        )
    })}
    </div>
    </div>
 
  )
}

export default CricketScore
