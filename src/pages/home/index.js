import React from 'react';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index';
import TabOptions from '../../components/tabOptions/index';
import {all} from '../../components/subjects';
import WhatToDisplay from './WhatToDisplay'

let li=[];
class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {activeTab: "About",searchField:'',clickSearch:0};
  }
  handleStateChange=(tab)=>{
    this.setState({activeTab:tab});
  }

  onSearchChange=(event)=>{
    this.setState({searchField: event.target.value});
  }
  setDefault=()=>{
    this.setState({activeTab: "About",clickSearch:0})
  }
  onClickSearch=()=>{
    this.setState({clickSearch:1});
    console.log(this.state.searchField);
    li=all.filter((item)=>{ return item.title.toLowerCase()===this.state.searchField.toLowerCase()})
    console.log(li);
  }
  render(){
  return(
    <div>
      <Header onSearchChange={this.onSearchChange} onClickSearch={this.onClickSearch} setDefault={this.setDefault}/> 
      <TabOptions activeTab={this.state.activeTab} onSetActive={this.handleStateChange}/>
      <WhatToDisplay activeTab={this.state.activeTab} searchField={this.state.searchField} clickSearch={this.state.clickSearch} list={li}/>
      <Footer/>
    </div>
  )}
}

export default HomePage;