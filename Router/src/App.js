
import './App.css';
import { Routes,Route } from 'react-router-dom';
import TopNav  from './Component/TopNav';
import Dashboard from './Component/Dashboard';
import CricketScore from './CricketScore';
import UpcomingMatch from './UpcomingMatch';
import SeriesList from './SeriesList';
import CountryList from './Component/CountryList';
import Register from './Component/Register';
import Login from './Component/Login';
import Logout from './Component/Logout';
import AdminLayout from './Admin/AdminLayout';
import AdminUser from './Admin/AdminUser';
import AdminContact from './Admin/AdminContact';
import AdminUpdate from './Admin/AdminUpdate';
function App(){
   return(
    <div style={{backgroundImage:"url(https://www.shutterstock.com/image-vector/night-cricket-stadium-illustration-vector-600nw-2160100275.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"100%",backgroundAttachment:"fixed"}}>
       
    <Routes>
    <Route path='/' element={<TopNav/>}>
    <Route path='currentmatch' element={<CricketScore/>}/>
    <Route path='upcomingmatch' element={<UpcomingMatch/>}/>
    <Route path='serieslist' element={<SeriesList/>}/>
    <Route path='countrylist' element={<CountryList/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='/' element={<Register/>}/>
    <Route path='logout' element={<Logout/>}/>
    <Route path="/Admin" element={<AdminLayout/>}>
       <Route path='user' element={<AdminUser/>}/>
       <Route path='contact' element={<AdminContact/>}/>
       <Route path='user/:id/edit' element={<AdminUpdate/>}/>
       </Route>
    </Route>
    <Route path='/dashboard' element={<Dashboard/>}>
    <Route path='mydrive' element={<div style={{color:"black",fontWeight:"bold"}}>My Drive</div>}/>
    <Route path='computers' element={<div style={{color:"black",fontWeight:"bold"}}>Computers</div>}/>
    <Route path='share' element={<div style={{color:"black",fontWeight:"bold"}}>Share</div>}/>
    <Route path='starred' element={<div style={{color:"black",fontWeight:"bold"}}>Starred</div>}/>
    </Route>
    </Routes>
    </div>
   )
}
export default App;