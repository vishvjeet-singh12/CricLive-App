import React from 'react'

const UpcomingMatchCard = (props) => {
  return (
    <div className='card'>
    <div className='flexx'>
       <div style={{fontWeight:"bold",fontSize:"20px"}}>{props.data.matchType}</div><hr></hr>
       <div>{props.data.dateTimeGMT}</div>
    </div>  
               <div className='flexx'>
                <div className='flexx'><img src={props.data.t1img} style={{width:"20px",height:"20px"}} alt=""/>
                <div className='name'>{props.data.t1}</div>  </div>
                <div>Vs</div>
                 <div className='flexx'>
                <div><img src={props.data.t2img} style={{width:"20px",height:"20px",marginRight:"10px"}} alt=""/></div> 
                <div className='name'>{props.data.t2}</div>
                </div>      
     </div>
     <div style={{fontWeight:"bold"}}>STATUS : {props.data.status}</div>
     
     </div>
            )
        }

export default UpcomingMatchCard
