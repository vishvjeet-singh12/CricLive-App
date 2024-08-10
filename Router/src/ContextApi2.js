import React,{useContext} from 'react'
import { UserContext } from '.';


const ContextApi2 = () => {
    let user=useContext(UserContext)
  return (
    <div>
      {user.name}
      </div>
    )
}

export default ContextApi2;