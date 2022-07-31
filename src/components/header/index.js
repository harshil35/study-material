import React from "react";
import './header.css';
import {BrowserRouter as Router, Route,Routes,Link,useNavigate} from "react-router-dom";
import back from '../../images/back2.png';
import home from '../../images/home.png'

const Header=({onSearchChange,onClickSearch,setDefault})=>{
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  return( 
  <div className="header">
    {/* <button className="back-button" onClick={routeChange}>
        <img src={back} alt="Search button" className="absolute-center search-button-image"></img>
    </button> */}
    <img src="https://upload.wikimedia.org/wikipedia/en/f/fb/National_Institute_of_Technology%2C_Warangal_logo.png" 
    alt="NITW Logo" className="header-logo"/>
    <div className="header-search">
      <input type="text" placeholder="Search for subject" className="enter-text" 
      onChange={onSearchChange}>
      </input>
      <button className="search-button" onClick={onClickSearch}>
        <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="Search button" className="absolute-center search-button-image"></img>
      </button>
    </div>
    <button className="refresh-button" onClick={
      function(event){
        setDefault();
        document.getElementsByTagName("input")[0].value ='';
      }
    }>
        <img src={home} alt="Refesh Button" className="absolute-center refresh-button-image"></img>
    </button>
    <button className="mail-admin" onClick={event => window.location.href='/mail'}>
        <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Mail admin" className="absolute-center
        mail-admin-image" ></img>
    </button>
  </div>);
}

export default Header;