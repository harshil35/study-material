import React from "react";
import './item.css';
import EM from '../../../../pages/EM/index';
import {BrowserRouter as Router, Route,Routes,Link} from "react-router-dom";

const Item=({item})=>{
  return(
    <div>
      <Link to={`/${item.title}`} state={item} className='link-class'>
      <div className="item-cover">
        <img src={item.cover} className='item-image' alt={item.title}/>
      </div>
      <div className="item-title">
        {item.title}
      </div>
      </Link>
    </div>
  );
}

export default Item;