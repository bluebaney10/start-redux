import React, { Component } from 'react';
import User from "./User";
import {connect} from "react-redux";


class App extends Component {
  render() {
    return (
      <div>
      <User username={this.props.user.name}/>
      <button onClick={()=>this.props.setName("Redux tutorial")}>ChangeName</button>
      </div>
    );
  }
}

const mapStatetoProps=(state)=>{
  return {
     
    user:state.user,
    emp:state.emp
    
   
    }
  
  };

const mapDispatchtoProps=(dispatch)=>{
  return {
    setName:(name)=>{
      dispatch({
        type:"setName",
        payload:name
      })
    }
    /*
    user:state.user,
    emp:state.emp
    */
  };

}

export default connect(mapStatetoProps,mapDispatchtoProps)(App);
