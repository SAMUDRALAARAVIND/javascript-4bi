import React from "react";
import ReactDOM from "react-dom";

const app = document.getElementById("app");
const h1 = React.createElement("h1", { id: "test" }, "Hello React");

const div = React.createElement("div", { id: "container" },
    h1,
    React.createElement("p", null, "Welcome to react")
);


// babel

ReactDOM.render(div, app);

/**
 * React code 
 * ReactDOm code 
 * code written by us
 * 
 * 
 * bundle.js => React code + React DOM code + code written by us
 * 
 * we need Bundling tools  for bundling the code : webpack
 * 
 */