
// let myName = "aravind"; 

// function callme(a) {
//     // console.log(typeof a); // function
//     let myName = "shekar"; 
//     a();
// }

// callme(function () {
//     console.log(myName);
// });

// A function passed as an argument to another function is called as callback function


// let myName = "aravind";
// function callme() {
//     let myName = "shekar";
//     return function () {
//         console.log(myName);
//     }
// }

// let r = callme();
// r();


// Primitive data types and Non primitive data types

/**
 * Data types:
 * number ( 10, 10.2, -39 )
 * string ('a', '10', '')
 * boolean (true | false)
 * undefined (undefined)
 * null => is not a data type
 * arrays , objects
 * function
 */

// let arr = [10, 20, 30];
//         0    1   2
// console.log(typeof arr); // object
// console.log(arr[1], arr["1"]);
// let x = "place";
// let obj = {
//     name: "aravind",
//     age: 23,
//     [x]: "Waranagal"
// };
// console.log(obj["place"]);
// console.log(obj["name"], obj["age"]);
// let age = "age";
// console.log(obj[age]); // age is not defined
// obj[age] => obj["name"]

// console.log(obj.age);

// let a = [10, 20, 30];
// let b = a;
// b[0] = 918;
// console.log(a === b); // #100 === #100
// console.log(a[0], b[0]);


// 918, 918

// 10, 10
// 10, 918
// let name = "aravind"; // 7 Bytes
// Strings are immutable(Not changable)
// Arrays are mutable(Changable)
// "aravind" => "aravindx"
// boolean => true | false
// true | false occupies a single bit
// 8 bits = 1byte
// undefined => undefined
// function => 

// function callme(){
//     console.log("aravind");
// }
// callme => 10000bytes


/**
 *
 * Simple data types(Primitive data types) :  number, string, boolean, undefined
 *  The data types which will have a fixed size, which gets stored in the stack memory.
 * Complex Data types(Non Primitive data types):  object, function
 *  The data types which will have variable size, which gets stored in the heap memory.
 */




// let a = [10, 20]; // #100 - #115
// let b = a; // #100 - #115
// console.log(a === b);// #100 === #100

// let x = "aravind";
// let y = "aravind";
// console.log(x === y);


// function manipulate(a, b) {
//     // a = #344, b = 109
//     a[0] = b + 10;
//     b = 100;
//     console.log(b);
// }

// let x = [10, 20, 30], y = 109;
// // x = #344

// manipulate(x, y);

// console.log(x, y);
// [10, 20, 30] , 109

/**
 * Major1 (Fundamentals)
 * 
 * Major2
 *  Async JS
 *  Event Loop, Callback queue, Promises, async/await
 */