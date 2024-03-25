import { createContext, memo, useContext, useState } from "react"

const CountContext = createContext("aravind");

function Component2() {
    // consuming countContext
    console.log("rendered component 2");
    const { number, update } = useContext(CountContext);
    // console.log(x); // {number: 10}
    return <div style={{ border: "2px solid blue" }}>
        <h4>Component 2</h4>
        <span>{number}</span>
        <button onClick={() => update(prev => prev + 1)}>Increment Count</button>
    </div>
}

const Component1 = memo(function () {
    const { number } = useContext(CountContext);
    console.log("rendered component 1");

    return <div style={{ border: "2px solid orange", padding: "20px" }}>
        <h4>Component 1, {number}</h4>
        <Component2 />
    </div>
});

export const ContextApi = () => {
    console.log("rendered root component");
    let [count, setCount] = useState(10);

    return (
        <div style={{ border: "2px solid black", padding: "20px" }}>
            <h1>Context API, {count}</h1>
            <CountContext.Provider value={{ number: count, update: setCount }}>
                <Component1 />
                <CountContext.Provider value={{ number: "abc", update: 10 }}>
                    <Component2 />
                </CountContext.Provider>
            </CountContext.Provider>
        </div>
    );
}

// let x = {
//     A: () => <h1>Some component</h1>
// }

// <x.A>
// </x.A>