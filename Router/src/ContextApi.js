import React,{useContext} from 'react'
import { UserContext } from '.';
import ContextApi1 from './ContextApi1';

const ContextApi = () => {
    let name=useContext(UserContext);
  return (
    <div>
      {name.name}
      <UserContext.Provider value={{name:"Vishu"}}>
     <ContextApi1/>
      </UserContext.Provider>
    </div>
  )
}

export default ContextApi;
