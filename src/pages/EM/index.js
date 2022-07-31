import React from "react";
import PastPapers from "../../aboutsubject/pastpapers";
import Notes from "../../aboutsubject/notes";
import Books from "../../aboutsubject/books";
import {BrowserRouter as Router,useParams, Route,Routes,Link,useLocation} from "react-router-dom";
import './EM.css';


const EM=(props)=>{
  const location=useLocation();
  return(
    <div className="subject-component-outer">
    <div className="subject-component">
      <div className="add-border">
      <div className="em-sub-head">
      <h4 className="subject-heading">{location.state.title}</h4>
      </div></div>
    <div className="subject-container absolute-center">
      {location.state.links.papers.length?
      <PastPapers state={location}/>:<p></p>}
      {location.state.links.notes.length?
      <Notes state={location}/>:<p></p>}
      {location.state.links.books.length?
      <Books state={location}/>:<p></p>}
    </div>
    </div>
    </div>
  );
}

export default EM;