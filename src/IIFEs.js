import React, { Component } from "react";
import "./styles.css";

class IIFEs extends Component {
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
    return (
      <div className="App">
        <h1>Using Immediately Invoked Function Expressions(IIFEs)</h1>
        {(()=> {
          if (isLoggedIn) {
            return <button style={{backgroundColor: `red`}}  onClick={this.toggle}>Logout</button>;
          } else {
            return <button style={{backgroundColor: `green`}}  onClick={this.toggle}>Login</button>;
          }
        })()}
      </div>
    );
  }
}

export default IIFEs
