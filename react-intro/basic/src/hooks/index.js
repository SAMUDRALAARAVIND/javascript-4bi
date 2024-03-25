// hooks => javascript functions , should be used inside any function ( functional components )
// useState, useEffect

import { Component, useEffect, useState } from "react";

// in class components to update state 
// this.state, this.setState

// class App extends Component {
//     constructor(){
//         this.state =  { count : 0 };
//     }
//     render() {
//         this.setState({count: 393})
//     }
// }

// lazy intialization => 

function getIntialState() {
    let sum = 0;
    for (let i = 1; i <= 1000; i++) sum += i;
    return sum;
}

// const ReactHooks = () => {
//     // setState(arg) => arg can be a value or it can be a function also.
//     // during the first render the value passed to useState method will be the intial state of the component
//     // const [state, setState] = useState(getIntialState);
//     /**
//      * during first render: 
//      * state = 240 => 241 => 242 => f1(242) => 243 => f2(243) => 244
//      * click: updates: [241, 242, f1, f2]
//      * 
//      * During second render: 
//      * state = 244 => 245 => 246 => f1(246) => 247 => f2(247) => 248
//      * queue = [ 245, 246, f1, f2 ]
//      * 
//      * During third render:
//      * state = 248
//      */
//     // const inc = () => {
//     //     // never do the direct mutation of the state
//     //     // state = 389393;
//     //     setState(state + 1);
//     //     setState(state + 2);
//     //     setState(function (prev) {
//     //         return prev + 1;
//     //     });
//     //     setState((prev) => {
//     //         return prev + 1;
//     //     });
//     // };

//     const [user, setUser] = useState({ name: "aravind", age: 23 });
//     // during first render: user = #400

//     const incAge = () => {
//         // intialState = { name: "aravind", age: 23 }
//         // nextState = 24
//         // user.age += 1; // user = #400
//         // debugger
//         // setUser(user); // #400
//         // setUser({ ...user, age: user.age + 1 }); // {} => #600
//         setUser((prev) => {
//             return { ...prev, age: prev.age + 1 }

//             // {...{name: "aravind", age: 23}, age: 24}
//         })
//     }
//     return (
//         <>
//             <h1>{user.name} Age: {user.age}</h1>
//             <button onClick={incAge}>Increment</button>
//         </>
//     );
// }


// const Counter = () => {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         count < 5 ? setCount(count + 1) : alert("Max limit reached");
//     }

//     const decrement = () => {
//         setCount(count - 1);
//     }

//     return <>
//         {
//             count > 0 ? (
//                 <>
//                     <button onClick={decrement}>-</button>
//                     <h1>{count}</h1>
//                     <button onClick={increment}>+</button>
//                 </>
//             ) : <button onClick={increment}>Add</button>
//         }
//     </>
// }

// let [e1, e2] = useState(arg)
// useEffect(function, dependency List)
function Test() {
    useEffect(() => {
        const f = () => {
            console.log("clicked body");
        }
        document.body.addEventListener("click", f);

        return function () {
            document.body.removeEventListener("click", f);
        }
    }, []);

    return <h1>Test Component</h1>
}

function UseEffectIntro() {
    debugger
    const [count, setCount] = useState(0);

    useEffect(function () {
        console.log("inside useEffect's callback");
    }, [count]);

    return <>
        <h2>{count}</h2>
        <h1>UseEffect Introduction</h1>
        {count % 2 === 0 && <Test />}
        <button onClick={() => setCount(count + 1)}>increment</button>
    </>
}

// componentDidMount , componentDidUpdate, componentWillUnMount => useEffect

// during first render: [ 10, 20, 12 ]
// during second render: [ 10, 21, 12 ]
// during third render: [10, 21, 12 ] no execution of callback after 3rd render
// during 4th render: [1, 2, 3] executes the callback as the whole list is changed

export default UseEffectIntro;