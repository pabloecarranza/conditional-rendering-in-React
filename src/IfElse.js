import React, { Component } from "react";
import "./styles.css";

class IfElse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  toggle = () => {
    this.setState({ ...this.state, isLoggedIn : !this.state.isLoggedIn})
  }
  render() {
    let {isLoggedIn} = this.state;
    const renderAuthButton = ()=>{
      if(isLoggedIn){
        return <button style={{backgroundColor: `red`}}  onClick={this.toggle}>Logout</button>
      } else{
        return <button style={{backgroundColor: `green`}}  onClick={this.toggle}>Login</button>
      }
    }
    return (
      <div className="App">
        <h1>If Else</h1>
        {renderAuthButton()}
      </div>
    );
  }
}

export default IfElse
