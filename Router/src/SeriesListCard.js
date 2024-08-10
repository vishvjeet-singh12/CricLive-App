import React from 'react'

const SeriesListCard = (props) => {
  return (
    <div className='card1'>
    <div>
       <div style={{fontWeight:"bold",fontSize:"20px"}}>{props.data.name}</div>
    </div>  
               
                <div className='flexx1'>
                <div>Starting Date :{props.data.startDate}</div>
                <div>Ending Date :{props.data.endDate}</div>
                </div>
                 <div className='flexx1'>
                <div>ODI : {props.data.odi}</div>
                <div>T20 : {props.data.t20}</div>
                </div>
                <div className='flexx1'>
                <div>TEST : {props.data.test}</div>
                <div>SQUADS : {props.data.squads}</div>
                </div>      
    
     </div>
  )
}

export default SeriesListCard
