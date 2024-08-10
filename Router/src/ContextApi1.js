import React,{useContext} from 'react'
import { UserContext } from '.';



const ContextApi1 = () => {
     let user =useContext(UserContext)
  return (
    <div>
      {user.name}
    </div>
  )
}

export default ContextApi1;