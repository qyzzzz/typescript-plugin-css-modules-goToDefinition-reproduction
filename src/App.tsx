import React from "react";
import logo from "./logo.svg";
import a from "./a.module.less";
import b from "./a.module.scss";
import "./App.css";

console.log(a.RootClass);
console.log(a["class-a"]);
console.log(a["class__b"]);

console.log(b.RootClass);
console.log(b["class-a"]);
console.log(b["class__b"]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
