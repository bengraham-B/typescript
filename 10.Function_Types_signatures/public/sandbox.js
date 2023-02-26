"use strict";
// let greet: Function
//! ============= Example 1 =============
//! This is a function signature
let greet;
//! This is following the function signature above on line 4.
greet = (name, greeting) => {
    console.log(` ${name} says ${greeting}`);
};
//* ============= Example 1 =============
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//^ ============= Example 3 =============
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
