import React from "react";
import {BrowserRouter as Router, Route,Routes,Link,useLocation} from "react-router-dom";
import './showLinks.css'


const ShowLinks=(props)=>{
  const location=useLocation();
  let ary=[],material='';
  if(location.pathname.includes('Notes'))
  {
    ary=location.state.state.links.notes;
    material=' notes';
  }
  else if(location.pathname.includes('PastPapers'))
  {
    ary=location.state.state.links.papers;
    material=' papers'
  }
  else if(location.pathname.includes('Books'))
  {
    ary=location.state.state.links.books;
    material=' books'
  }
      
  return(
    <div className="link-container-outer">
      <div className="link-container">
        <div className="link-head">
        <h1 className="heading-for-linkpage absolute-center header">{location.state.state.title}{material}</h1>
        </div>
        <div className="disp-links">
        {
          ary.map((item,i)=>{
            return <a className="this-link" href={`${item}`}>{`Link ${i+1}`}</a>
          })
        }
        </div>
      </div>
    </div>
  );
}

export default ShowLinks;