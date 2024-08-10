import React from 'react'

const CricketCard = (props) => {
  return (
    <div className='card'>
    <div className='flexx'>
       <div>{props.data.name}</div>
       <div>{props.data.date}</div>
    </div>  
    <div className='team'>
       {
        props.data.teamInfo.map((team,index)=>{
            return(
                <div className='flexx'>
                <div className="flexx flag"><img src={team.img} style={{width:"20px",height:"20px",marginRight:"10px"}} alt=""/>
                {team.shortname?team.shortname:team.name}
                </div>
                <div>{props.data.score[index]?<span>{props.data.score[index].r}/
                {props.data.score[index].w}({props.data.score[index].o})</span>:"yet to bat"}</div>
               </div>
            )
        })
       }
    </div>
    <div>{props.data.matchStarted?"Match is live":"----"}</div>
     <div className="venue">Venue: {props.data.venue}</div> 
    </div>
  )
}

export default CricketCard
