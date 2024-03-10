// console.log(window);
// window.alert("Some message")
// const value = prompt("Enter something: ");

// console.log(value);

// window.navigator.geolocation.getCurrentPosition((data) => {
//     console.log(data);
// })

// console.log(typeof window.setTimeout);

// 1s = 1000ms
// 3s = 3000ms
// console.log("1");
// setTimeout(function () {
//     console.log("2");
// }, 3000);
// console.log("3");


// let a = 200;
// setTimeout(() => { // f1
//     console.log(a); // 290
//     a++;
// }, 1000)
// setTimeout(() => { // f2
//     a++;
//     console.log(a); // 292
// }, 1500);
// a += 90; // a = 290

// Microtask Queue

// console.log(1);
// console.log(typeof window.queueMicrotask);

// console.log(1);
// queueMicrotask(function () {
//     console.log(2);
// })
// // console.log(3);

// setTimeout(function(){

// }, 1000)

// output: 1 , 3 , 2

// let a = 200;
// setTimeout(function () { // f1
//     a += 120;
//     console.log(a); // 430
// }, 0);

// queueMicrotask(function () { // f2
//     a += 100;
//     console.log(a); // 310
// });

// a += 10; 

// setInterval(() => {
//     console.log("abc");
// }, 1000)

// DOM => Document Object Model
// const user = {
//     name: "Aravind",
//     getName: function () {
//         console.log("Heloo aravind");
//     }
// }

// console.log(typeof user.name);

// user.getName();

// document = {
//     getElementById: function(id){

//     }
// }


// DOM querying
/*
1. document.getElementById("id")
2. document.getElementsByTagName("")
3. document.getElementsByClassName("classname")
4. document.querySelector("h1");
*/

// let n = 256, sum = 0;
// // n*(n + 1) / 2

// for (let i = 2; i <= n; i += 2) {
//     sum += i;
// }

// const spanElement = document.getElementById("count");
// spanElement.innerText = sum;
