import React from 'react'
import { useEffect,useState} from 'react';
import axios from 'axios';
import SeriesListCard from './SeriesListCard';

const SeriesList = () => {
    const[matches,setMatches]=useState([]);
    useEffect(()=>{
       axios.get("https://api.cricapi.com/v1/series?apikey=df9914d2-fa2b-4cdc-bd0f-b06defecc4c9&offset=0").then((res)=>{
        console.log(res.data.data);
        setMatches(res.data.data)
       })
    },[])
  return (
    <div>
    <h1 style={{backgroundColor:"lightcyan",fontSize:"30px",padding:"20px",textAlign:"center",marginBottom:"10px"}}>Series List</h1>
     <div className='matchlist'>
       {matches.map((match)=>{
        return(
            <SeriesListCard data={match}/>
        )
       })}
     </div>
    </div>
  )
}

export default SeriesList;
