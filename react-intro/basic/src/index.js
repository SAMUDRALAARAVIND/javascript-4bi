import { createRoot } from "react-dom/client";
import ProductCard from "./ProductCard";
import ReactHooks from "./hooks/index";
import { StateUpLifting } from "./hooks/StateUplifting";
import { ContextApi } from "./hooks/ContextApi";

const root = createRoot(document.getElementById("app"))


const count = 0;

// root.render(
//     <>
//         {/* {productCard({ title: "Bread", description: "Bread is good for health" })}
//         {productCard({ title: "Milk", description: "Milk is good for health" })} */}
//         {/* <h1></h1>
//         <p></p>
//         <span></span>
//         <img src="" alt="" /> */}
//         {/* <ProductCard title="Bread" description="Bread is good for health" /> */}
//         {/* If ProductCard is a class component */}
//         {/* <ProductCard a="10" /> => new ProductCard({a: "10"})  */}

//         {/* if ProductCard is functional component */}
//         {/* <ProductCard a="10" /> =>  ProductCard({a: "10"}) */}
//         {/* {
//             count === 0 ? <h1>No count</h1> : <h2>Count is present : {count}</h2>
//         } */}

//         {
//             count > 0 && <h1>count is positive : {count}</h1>
//         }

//     </>
// );

root.render(<ContextApi />)