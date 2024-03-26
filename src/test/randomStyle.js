const fs = require("fs");
const path = require("path");
const resolve = (_p) => path.resolve(__dirname, _p);

// const tsconfig = require("../../tsconfig.json");

const numClasses = 20;
const { randomStyles, classnames } = generateRandomStyles(numClasses);
const styleFilePath = resolve("./randomStyles.module.scss");
const AppFilePath = resolve("./App.tsx");

function randomString(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const char = charset.charAt(Math.floor(Math.random() * charset.length));
    result += char;
  }
  return result;
}
function generateRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateRandomStyles(numClasses) {
  const classnames = [];
  let styles = "";
  for (let i = 0; i < numClasses; i++) {
    const className = "C" + randomString(10);
    const color = generateRandomHexColor();
    const fontSize = Math.floor(Math.random() * 20) + 10;
    const dp = Math.floor(Math.random()) > 0.5 ? "none" : "block";
    const background = Math.floor(Math.random()) > 0.5 ? "#fff" : "#000";
    const style = `.${className} {
    color: ${color};
    font-size: ${fontSize}px;
    display: ${dp};
    background: ${background};
  }
  
  `;
    classnames.push(className);
    styles += style;
  }
  return { randomStyles: styles, classnames };
}

const replaceAppTestModule = () => {
  let tpl = `import React from "react";
  import { ${classnames.join(", ")} } from "./randomStyles.module.scss"
  import randomStyles from "./randomStyles.module.scss";
  
  ${classnames.map((cls) => `console.log(randomStyles['${cls}'])`).join("\n")}
  export const App = () => {
    return <div></div>;
  }
  `;

  // allowUnknownClassnames
  tpl += `
    console.log(randomStyles.notExistClass)`;

  // namedExports
  tpl += `
    ${classnames.map((cls) => `console.log(${cls})`).join("\n")}`;

  fs.writeFileSync(AppFilePath, tpl);
};

if (fs.existsSync(styleFilePath)) {
  fs.unlinkSync(styleFilePath);
}
if (fs.existsSync(AppFilePath)) {
  fs.unlinkSync(AppFilePath);
}

fs.writeFileSync(styleFilePath, randomStyles);
replaceAppTestModule();

console.log(randomStyles);
