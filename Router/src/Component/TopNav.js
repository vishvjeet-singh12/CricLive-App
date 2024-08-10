import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
// import img from "../logo-search-grid-1x.png"
import ChaletIcon from '@mui/icons-material/Chalet';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { UseContext } from "../Store/UseContext";

const TopNav=()=>{
  const {isLoggedIn}=useContext(UseContext);
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return(
    <div>
    <div class="topnav" id="myTopnav">

    {isLoggedIn ?
      <>
      <Link to="/currentmatch" class="active"> <div style={{display:"flex", alignItems:"center"}}>
      CurrentMatches<div style={{marginLeft:"5px"}}><ChaletIcon/></div></div></Link> 
  
      <Link to="/upcomingmatch"><div style={{display:"flex", alignItems:"center"}}>
      UpcomingMatches<div style={{marginLeft:"5px"}}></div><StickyNote2Icon/></div></Link>
      
      <Link to="/serieslist"><div style={{display:"flex", alignItems:"center"}}>
       SeriesList<div style={{marginLeft:"5px"}}></div><StickyNote2Icon/></div></Link>
      
       <Link to="/countrylist"><div style={{display:"flex", alignItems:"center"}}>CountryList
        <div style={{marginLeft:"5px"}}></div><PersonIcon/></div></Link>
        </>:<></>
    }
  
      <div class="right-lnk">
      {
        isLoggedIn ?  <Link to="/logout"><div style={{display:"flex", alignItems:"center"}}>Logout
      <div style={{marginLeft:"5px"}}></div></div></Link> 
       :
      <>
      <Link to="/login"><div style={{display:"flex", alignItems:"center"}}>Login
      <div style={{marginLeft:"5px"}}></div></div></Link>
      <Link to="/"><div style={{display:"flex", alignItems:"center"}}>Register
      <div style={{marginLeft:"5px"}}></div></div></Link>
      </>
    }
    </div>
    
    <Link to={"javascript:void(0);"} class="icon" onClick={myFunction}><MenuIcon/></Link>
  
    </div>
  <div>
  <Outlet/>
  </div>
  </div>
  )
}
export default TopNav;