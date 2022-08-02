import React, { Component } from "react";
import "./styles.css";

class TernaryOperators extends Component {
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
    let { isLoggedIn } = this.state;
    return (
      <div className="App">
        <h1>Ternary Operator</h1>
        {
          isLoggedIn ? 
            <button style={{backgroundColor: `red`}} onClick={this.toggle}>Logout</button> 
          :
            <button style={{backgroundColor: `green`}} onClick={this.toggle}>Login</button>
         }
      </div>
    );
  }
}

export default TernaryOperators
