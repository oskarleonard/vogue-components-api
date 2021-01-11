import React from "react";
import { headerHigh } from "./api/mock/article/components/headerHigh";
import HeaderHigh from "./components/article/headerHigh/HeaderHigh";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <HeaderHigh headerHigh={headerHigh} />
      <HeaderHigh headerHigh={headerHigh} />
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
      <p>hello</p>
    </div>
  );
}
