import React, { Component } from "react";
import "./styles.css";

class LogicalAND extends Component {
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
        <h1>Logical && (Short Circuit Evaluation with &&)</h1>
        {isLoggedIn && <button style={{backgroundColor: `red`}}  onClick={this.toggle}>Logout</button>}
        {!isLoggedIn && <button style={{backgroundColor: `green`}}  onClick={this.toggle}>Login</button>}
      </div>
    );
  }
}

export default LogicalAND
