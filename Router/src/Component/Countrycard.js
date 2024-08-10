import React from 'react'

const Countrycard=(props)=> {
  return (
    <div className='card' style={{padding:"20px"}}>
    <div className='flexx' style={{marginLeft:"20%"}}>
      <div style={{fontSize:"20px",fontWeight:"bolder"}}>{props.data.name}</div>
      <div><img src={props.data.genericFlag} alt='' style={{width:"30px",height:"20px",justifyContent:"center",display:"flex"}}/></div>
    </div>
    </div>
  )
}

export default Countrycard
