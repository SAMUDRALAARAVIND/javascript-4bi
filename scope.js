/**
 * Variables and Data types
 * Operators
 * Conditional Statements & Loops
 *
 * functions  & Execution flow
 * Primitive and Non primitive data types
 * Scope of variable & Closures
 * this keyword
 *
 * Async JS
 * Callback Hell
 * Promises & async/await
 *
 * DOM
 * DOM Tree, DOM Manipulations
 *
 *
 * Reactjs
 */
// Variable rules: 
// Start with : _, alpha, $
// Can contain:  _, alpha, $, numbers

// var name = "aravind";
// console.log(typeof name);

// function callme() {
//     console.log("aravind");
// }
// console.log(typeof callme);


// let callme = function () {
//     console.log("inside function");
// };
// console.log(typeof callme); 

// let callme = () => {
//     console.log("inside function");
// }
// console.log(typeof callme);

// let arr = [10, 20, 1, 3], sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);


// let arr2 = [9, 383, 38, 33, 3838, 33893, 0], sum2 = 0;
// for (let i = 0; i < arr2.length; i++) {
//     sum2 += arr2[i];
// }
// console.log(sum2);

// let input1 = [10, 20, 1, 3], input2 = [9, 383, 38, 33, 3838, 33893, 0];

// // A function can take any number of parameters but returns only one value

// function findSumofElements(arr) {
//     // takes an array as input and returns sum of all the elememt
//     console.log(arr); // arr = undefined
//     console.log(a);
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return 300;
// }

// let result = findSumofElements();
// console.log(result); // 300


// Scope OF variables
// The process of allocating data to the variables during creation phase is called as hoisting.
// console.log(b); // undefined
// console.log(a); // Cannot access a before intialisation
// let a = 200;
// var b = 300;
// console.log(a, b); // 200, 300

// let a = 900;
// console.log(b + a); // undefined + 900 => NaN
// var b = 39;
// console.log(b + a + c); // 
// // b = 39, a = 900, c =  can't be accessed
// const c = 19;

// let a = 100;
// function callme(x, y) {
//     let b = x + y;
//     console.log(b + a); // 130
// }

// let r = callme(10, 20);
// console.log(r); // undefined
// console.log(b); // undefined
// var b = 9203;

// const a = 100;
// function callme() {
//     console.log(b + a); // NaN
//     console.log(b + c); //can not access b before intialsiation
//     let c = 102;
// }
// callme();
// var b = 140;
// console.log("final");


// function f1() {
//     let a = 30, x = 100;
//     let f2 = function (x) {
//         console.log(x + a + b); // 200
//     }
//     f2(a + x); // f2(130)
// }
// // let b = 40;
// f1();