import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import reportWebVitals from './reportWebVitals';
 import { BrowserRouter } from 'react-router-dom';
import UseContextList from './Store/UseContext';
// import ContextApi from './ContextApi';
// import ContextApi2 from './ContextApi2';
const root = ReactDOM.createRoot(document.getElementById('root'));


 root.render(
  <UseContextList>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </UseContextList>
 
    //  export const UserContext=createContext("");
  // <UserContext.Provider  value={{name:"Vishvjeet Singh"}}>
  // <ContextApi/>
  // <ContextApi2/>
  // </UserContext.Provider>
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
