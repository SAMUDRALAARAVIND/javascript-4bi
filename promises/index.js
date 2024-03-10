// new operator 
// this => new 

// function callme(a, b) {
//     // this = {} 
//     // { a: 10 }
//     // {a: 10, b:20 }
//     console.log(this); // this = #200 = {}
//     this.a = a;
//     this.b = b;
//     console.log(this); // {a: 10, b:20 }
// }

// // callme(10, 20);
// const reference = new callme(10, 20); // {} => #200
// console.log(reference); // {a: 10, b:20 }

// let user1 = {
//     name : "aravind",
//     age: 34
// },
// user2 = {
//     name: "rajesh",
//     age: 33,
// }

// A function when called with new Operator is called constructor function.
// Constructor function should be starting with a capital letter ( just a convention ).
// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
// let u1 = new User("aravind", 23), u2 = new User("rajesh", 33);
// console.log(u1, u2);


// Promise 
// Promise: I will give you phone before 10AM tomorrow

// start: pending
// end: fullfilled || rejected

// if a promise comes into end state then it's a settled promise

// possible states of a promise are (3) : pending, fullfilled , rejected
// A promise can at max hold two states 

// console.log(window.Promise);
// Promise => constructor function

// resolve function can be used for fullfilling the promise
// reject function can be used for rejecting the promise
// reject(10);

// const executor = (resolve, reject) => {
//     console.log("aravind");
//     setTimeout(() => { // f
//         console.log(promise); // pending
//         reject(10); // fullfilled<10>
//         console.log(promise); // fullfilled<10>
//     }, 3000)
// }

// const promise = new Promise(executor);
// console.log(promise); // pending

// promise.then(function (resolvedData) { // success
//     console.log("promise resolved", resolvedData);
// });

// promise.catch(function (rejectedData) {
//     console.log("promise rejected", rejectedData);
// });

// promise.finally(function () {
//     console.log("promise settled down");
// })




// all the promise object will get three methods into it
// 1) then, 2) catch 3) finally


// use cases
const lat = document.getElementById("lat");
const long = document.getElementById("long");
// navigator.geolocation.getCurrentPosition(function (data) {
//     const latitude = data.coords.latitude;
//     const longitude = data.coords.longitude;

//     lat.innerText = latitude;
//     long.innerText = longitude;
// })

// let getLocationPromise = new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(function (data) {
//         resolve(data);
//     });
// });

// getLocationPromise.then(function (data) {
//     const latitude = data.coords.latitude;
//     const longitude = data.coords.longitude;

//     lat.innerText = latitude;
//     long.innerText = longitude;
// });

const button = document.getElementById("btn");

// callback hell
// setTimeout(() => {
//     button.style.backgroundColor = "blue";
//     setTimeout(() => {
//         button.style.backgroundColor = "yellow"
//         setTimeout(() => {
//             button.style.backgroundColor = "orange"
//         }, 2000)
//     }, 3000);
// }, 2000);

// to overcome callback hell , we can use promises with async/await keywords.

// wait for delay(2000);// await delay(2000)
// do something // blue
// wait for delay(3000)
// do something  // yellow
// wait for delay(2000)
// do something // orange

function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, ms)
    });
}

// const promsie = delay(2000)
// promsie.then(function () {
//     console.log("promise resolved");
// })

// promise chaining


// async and await are two keywords in javascript

// setTimeout(() => {
//     button.style.backgroundColor = "blue";
//     setTimeout(() => {
//         button.style.backgroundColor = "yellow"
//         setTimeout(() => {
//             button.style.backgroundColor = "orange"
//         }, 2000)
//     }, 3000);
// }, 2000);

//it's an asynchronous function
// async function someTask() {
//     console.log("aravind");
//     await delay(2000); // (1) // delay(2000) => returns a promise
//     console.log("rajesh");
// }

// someTask();
// console.log("after calling someTask");


let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(10);
    }, 2000)
});

const promise2 = promise.then(function () {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum, "sum of 100 numbers");
    console.log(a);
});

promise2.then(function () {
    console.log("promsie 2 fullfilled");
})

promise2.catch(function () {
    console.log("promise 2 rejected");
})


