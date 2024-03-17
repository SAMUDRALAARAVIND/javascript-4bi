import React from 'react';
import ReactDOM from 'react-dom/client';
import subtract, { a as jjdd, sum } from "./app"

const root = ReactDOM.createRoot(document.getElementById("app"));
// javascript xml 
// <tag></tag>

// Inside JSX we can embed all the primitive data types and Arrays.
// JSX always need to be a single element
// to embed data inside jsx we can use `{}` notation
const list = [<span key={1}>Aravind</span>, <b key={2}>Rajesh</b>, <p key={3}>Shekar</p>];


const onClickBtn = () => {
  console.log("clicked on button");
}

let x = "test";

function callme() {
  return 100;
}

const h1 = (
  <>
    <div className={x} id='xyz'>
      {list}
      <button onClick={onClickBtn}>Click Me</button>
    </div>
    <b>{callme()}</b>
    <p>{jjdd}</p>
    <p>{sum(10, 20)}</p>
    <p>{subtract(30, 20)}</p>
  </>
);

root.render(h1);
