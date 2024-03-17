
// function callme() {
//     let user;
//     try {
//         console.log(user.name); // undefined
//         return 200;
//     }
//     catch (error) {
//         console.log("error generated", error.message, error.name, error.stack);
//         return 100;
//     }
//     finally {
//         // finally is used for clean up activity
//         console.log("down code");
//     }
// }
// console.log(callme());
// console.log("after callme");

// const names = ["aravind", "rajesh", "naresh", "akhil"] ;
// for(names) {
//     p  
//     container.appendChild(p);
// }

// <p>aravind</p>

// after seraching
// searchKeyword = "sh" ;
// const names = ["rajesh", "naresh"];

// container.innerHTML = ''; // 4 nodes will be removed from UI 
// for (names) {
//     p
//     container.appendChild(p); // 2 nodes are added to the UI
// }
// // 4s + 2s = 6s

// 2s



// document => RealDOM (UI)

// VDOM

// let user = {name: "aravind"} ;
// const vuser = {...user} ;

/**
        data = ["aravind", "rajesh", "naresh", "akhil"]
 *          Intial DOM(RealDOM)
                 div
    
    p         p         p       p
(aravind) (naresh)  (rajesh)  (akhil)


                VDOM1
                div
    
    p         p         p       p
(aravind) (naresh)  (rajesh)  (akhil)

After update "sh" : ["rajesh", "naresh"]

            VDOM2
             div
    
      p            p      
 (naresh)       (rajesh)  


 diffingAlgorithm(vdom1, vdom2){
    // O(n)
    return [ p(aravind) , p(akhil) ];
 }

syncing the diffs with Real DOM is called Reconciliation

time = 3s

 */



// <h1>Hello React</h1>

const app = document.getElementById("app");

// const h1 = document.createElement("h1");
// h1.innerText = "Hello React";

// app.appendChild(h1);

// const h1 = React.createElement("h1", { id: "test", className: "abc mno" }, "Hello React");
// app.appendChild(h1);
// ReactDOM.render(h1, app);

// const users = ["aravind", "rajesh", "naresh", "akhil"];

// const elements = users.map(user => React.createElement("p", null, user));
// const container = React.createElement("div", { id: "container" }, ...elements);
// ReactDOM.render(container, app);

/**
    when ther's a state change then we need to create new VDOM
 */

/**
    <div>
        <h1> <span></span>Some text</h1>
        <p>Some para</h1>
    </div>
 */

// const div = React.createElement(
//     "div",
//     null,
//     React.createElement("h1", null, "Some text", React.createElement("span", null, "Some span text")),
//     React.createElement("p", null, "Some para")
// );

// pre processor which can convert the html like code into respective React elements before loading in the browser.

// babel compiler
const div = (
    <div>
        <h1> <span></span>Some text</h1>
        <p>Some para</h1>
    </div>
);

React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Some text", React.createElement("span", null, "Some span text")),
    React.createElement("p", null, "Some para")
);
// ReactDOM.render(div, app);
