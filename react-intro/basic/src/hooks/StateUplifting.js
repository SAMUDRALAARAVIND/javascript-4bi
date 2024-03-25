import { useCallback, useEffect, useMemo, useRef, useState, memo } from "react";

// child component is updating the state of parent component: state uplifting.

//1st render:  props = {}, 
// 2nd render: props = {}
const Test = memo(() => {
    console.log("rendered test");
    return (
        <div>
            <p>Some text</p>
        </div>
    );
});

/**
 * useRef, useCallback, useMemo, useContext
 * memo
 * 
 * useRef: 
 * will maintain a single reference through out the component life cycle
 */

let list = [];
export const StateUpLifting = () => {
    // let x = useRef(function () {
    //     console.log("kdkd");
    // })
    // console.log(x);
    // const user = useRef({ name: "aravind" }); // { current: {name: "aravind"} } => #400, #400
    const [count, setCount] = useState(199);
    const paraRef = useRef(null);
    console.log(paraRef);// { current: null } => {current: somethingElse}

    // const showCount = useCallback(() => {
    //     console.log(count);
    // }, [count]);

    // const x = useMemo(function () {
    //     console.log("inside big function");
    //     let sum = 0;
    //     for (let i = 1; i <= count; i++) {
    //         sum += i;
    //     }
    //     return sum;
    // }, [count === 201]);
    // // [false], [false], [true] , [false]
    // console.log(x);

    // during the first render: #400 (count = 0), #500 (count = 1)

    // list.push(user);
    // if (list.length === 2) {
    //     console.log(list[0] === list[1]);
    //     console.log(list[0], list[1]);
    // }
    // let x = { name: "aravind" }
    // console.log(x);

    // let f = function () {
    //     console.log("ffkfk");
    // }

    const showText = () => {
        console.log(paraRef.current.innerText);
        paraRef.current.innerText = "sjdkdkkd"
        // console.log(document.getElementsByTagName("p")[0].innerText);;
    }

    useEffect(() => {
        console.log(paraRef);
    }, [])

    return (
        <div>
            <h1>{count}</h1>
            <p ref={paraRef}>Some Para</p>
            <button onClick={() => setCount(count + 1)}>Update count from parent</button>
            <button onClick={showText}>ShowCount</button>
            <Test />
        </div>
    );
}

