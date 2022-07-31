import React from "react";
import './tabOptions.css';
import info1 from '../../images/info1.png';
import info2 from '../../images/info2.png';
import one from '../../images/one.png';
import oneblack from '../../images/oneblack.png';
import two from '../../images/two.png';
import twoblack from '../../images/twoblack.png';

const tabs=[
  {
    key:1,
    name:"About",
    active_img: info1,
    inactive_img: info2
  },
  {
    key:2,
    name:"1st-year",
    active_img: one,
    inactive_img: oneblack
  },
  {
    key:3,
    name:"2nd-year",
    active_img: two,
    inactive_img: twoblack
  }
];

const TabOptions=({activeTab,onSetActive})=>{
  return (
  <div className="tab-options">
    <div className="max-width options-wrapper">
      {tabs.map((tab)=>{
        return(
          <div onClick={()=>onSetActive(tab.name)}
          className={`tab-item absolute-center cur-pointer ${activeTab===tab.name && "active-tab"}`}>
              <div className="tab-image-container absolute-center"
                style={{backgroundColor:`${activeTab===tab.name?"#faebd7":""}`}}>
                  <img className="tab-image" alt={tab.name} src={activeTab===tab.name ? tab.active_img:tab.inactive_img}
                    width="40px" height="40px"
                  /> 
              </div>
              <div className="tab-name">{tab.name}</div>
          </div> 
        );
      })}
    </div>
  </div>
  );
}

export default TabOptions;