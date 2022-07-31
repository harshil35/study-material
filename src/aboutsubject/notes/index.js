import React from "react";
import '../pastpapers/pastpapers.css';
import {BrowserRouter as Router, Route,Routes,Link,useLocation} from "react-router-dom";

const Notes=(props)=>{
  const location=useLocation();
  return(
    <div class="card card-3">
    <div class="card__icon"><i class="fas fa-bolt"></i></div>
    <p class="card__exit"><i class="fas fa-times"></i></p>
    <h2 class="card__title">Notes</h2>
    <p class="card__apply">
    <Link to={`/${location.state.title}/Notes/`} state={location} class="card__link" href="#">Click Here!<i class="fas fa-arrow-right"></i></Link>
    </p>
  </div>
  );
}

export default Notes;