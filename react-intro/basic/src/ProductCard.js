
import { useState } from "react";
// hooks are plain javascript functions, using which we can acheive life cycle methods, state etc..
// hooks can only be called inside a  javscript function only.

function ProductCard({ title, description }) {

    const [count, setCount] = useState(10); // [ state, setterFunction ]
    console.log("rendered");

    const increment = () => {
        // direct manipulation should be avoided on the state as it will not re render the component 
        // to manipulate the state always use the respective setter function .

        setCount((prev) => {
            return prev + 1;
        });
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

// import { Component } from "react";

// ProductCard is a functional component

// class ProductCard extends Component {
//     constructor(props) {
//         console.log("inside constructor");
//         // props are always immutable
//         // Component class's constructor will make all the props as immutable.
//         super(props);
//         // state is a standard property for every class component
//         // state should be intialised inside constructor only.
//         // we should not manipulate the state by ourselves
//         this.state = { count: 10 };
//     }

//     render() {
//         console.log("inside render method");
//         const increment = () => {
//             // 
//             // this.state.count = this.state.count + 1;
//             this.setState({ count: this.state.count + 1 });
//         }

//         const decrement = () => {
//             this.setState({ count: this.state.count - 1 });
//         }

//         return <div>
//             <h1>{this.state.count}</h1>
//             <button onClick={decrement}>Decrement</button>
//             <button onClick={increment}>Increment</button>
//         </div>;
//     }

//     componentDidMount() {
//         console.log("component mounted");
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log("component is updated", prevProps, prevState);
//         console.log("current state", this.state);
//     }

//     componentWillUnmount() {
//         console.log("component is about die");
//     }
// }

export default ProductCard;