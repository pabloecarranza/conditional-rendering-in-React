import React, { Component } from "react";
import { If, Then, Else } from './JSXControlStatements';
import "../styles.css";

class EnhancedJSX extends Component {
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
        <h1>JSX Control Statments</h1>
        <If condition={isLoggedIn} >
          <Then>
            <button style={{backgroundColor: `red`}}  onClick={this.toggle}>Logout</button>
          </Then>
          <Else>
            <button style={{backgroundColor: `green`}}  onClick={this.toggle}>Login</button>
          </Else>
        </If>
      </div>
    );
  }
}

export default EnhancedJSX