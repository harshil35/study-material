import React from 'react';
import About from '../../components/About/index';
import FirstYear from '../../components/1st-year/index';
import SecondYear from '../../components/2nd-year/index';
import Item from '../../components/1st-year/collections/item/index';


const WhatToDisplay=({activeTab,searchField,clickSearch,list})=>{
  if(clickSearch===1 && list.length)
  {
      return <div className='max-width absolute-center'>
        {
          <Item item={list[0]}/>
        }   
        </div>
  }
  else
  {
    switch(activeTab){  
      case "About":
        return <About/>;
      case "1st-year":
        return <FirstYear/>;
      case "2nd-year":
        return <SecondYear/>;
      default:
        return <About/>;
  }}
}

export default WhatToDisplay;
