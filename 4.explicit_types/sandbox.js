//* --- explicit types ---
var character; // initialised variable as string 
var age;
var isLoggedIn;
character = 'mario';
age = 30;
isLoggedIn = true;
//~ --- arrays ---
var ninjas; //initialising ninja as an array of strings
ninjas = ['Yoshi', "Mario"];
ninjas.push("Ben");
var emptyArray = []; //initialising emptyArray as an empty array of strings
emptyArray.push("Arny");
//!--- union types ---
var mixedArray = []; //initialsing array to be a string or a number or a boolean
mixedArray.push('hello');
mixedArray.push(7);
mixedArray.push(false);
console.log(mixedArray);
//using union types on normal variables
var uid; //initialising variable as either a string or a number
uid = '123';
uid = "Sup Ninjas";
//& --- objects ---
var ninjaOne; // initialsing variable as an object 
ninjaOne = { name: "Yoshi", age: 30 };
ninjaOne = []; // ninjaOne can be an array, as an array is a kind pf object
var ninjaTwo;
ninjaTwo = { name: 'mario', age: 30, beltColor: "purple" };
