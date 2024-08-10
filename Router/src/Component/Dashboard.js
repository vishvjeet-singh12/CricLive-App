
import React from 'react'
import { Link} from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import "./Dashboard.css"
import ChaletIcon from '@mui/icons-material/Chalet';
import ComputerIcon from '@mui/icons-material/Computer';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Dashboard = () => {
  return (
    <div style={{display:"flex"}}>
    <aside>
   <h1 style={{marginLeft:"60px"}}>Menu</h1>

  <Link to="/dashboard/mydrive">
  <div style={{display:"flex", alignItems:"center"}}><div style={{marginRight:"5px"}}><ChaletIcon/></div>
   <h1> My drive</h1></div></Link>

  <Link to="/dashboard/computers">
  <div style={{display:"flex", alignItems:"center"}}><div style={{marginRight:"5px"}}>
  <ComputerIcon/></div><h1> Computers</h1></div></Link>
   
  
  <Link to="/dashboard/share">
  <div style={{display:"flex", alignItems:"center"}}><div style={{marginRight:"5px"}}>
  <FolderCopyIcon/></div><h1> Shared with me</h1></div></Link>
    
  <Link to="/dashboard/starred">
   <div style={{display:"flex", alignItems:"center"}}><div style={{marginRight:"5px"}}>
    <StarOutlineIcon/></div><h1>Starred</h1></div></Link>
    
    <Link to="https://www.linkedin.com/in/florin-cornea-b5118057/" target="_blank">
    <div style={{justifyContent:"right"}}><LinkedInIcon/></div>
  </Link>
</aside>
      <div>
      <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard
