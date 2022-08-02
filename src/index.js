import React from "react";
import { render } from "react-dom";

import IfElse from "./IfElse";
import TernaryOperators from "./TernaryOperators";
import LogicalAND from "./LogicalAND";
import IIFEs from "./IIFEs";
import EnhancedJSX from "./JSXControlStatements/EnhancedJSX";

const Root = () => {
  return (
    <React.StrictMode>
      <h1 style={{textAlign: `center`}}>ways to implement Conditional Rendering in React.</h1>
      <IfElse />
      <hr />
      <TernaryOperators />
      <hr />
      <LogicalAND />
      <hr />
      <IIFEs />
      <hr />
      <EnhancedJSX />
    </React.StrictMode>
  );
};

render(<Root />, document.getElementById("root"));
