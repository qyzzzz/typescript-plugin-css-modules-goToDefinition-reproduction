import React from "react";
import { selectorAblue, selectorAgreen } from "./a.module.less";
import s from "./a.module.less";
import b from "./a.module.scss";
import randomStyles from "./test/randomStyles.module.scss";
import "./App.css";

function App() {
  console.log(b.RootClass);
  console.log(b["class-a"]);
  console.log(b["class__b"]);
  console.log(randomStyles["C7joyvSMxIf"]);
  console.log(b["child-class"]);
  console.log(b["nested-class-parent"]);

  console.log(s["child-class"]);
  console.log(s["test-class"]);
  console.log(s["color-set"]);
  console.log(s["column-1"]);
  console.log(s["column-2"]);
  console.log(s["nested-class-parent"]);
  console.log(s.selectorAblue);
  console.log(s.selectorAgreen);

  return <div className="App"></div>;
}

export default App;
