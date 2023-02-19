//* --- explicit types ---
let character:string; // initialised variable as string 
let age:number;
let isLoggedIn: boolean;

character = 'mario'
age = 30
isLoggedIn = true

//~ --- arrays ---
let ninjas:string[] //initialising ninja as an array of strings
ninjas = ['Yoshi', "Mario"]
ninjas.push("Ben")

let emptyArray:string[] = [] ;//initialising emptyArray as an empty array of strings
emptyArray.push("Arny");

//!--- union types ---
let mixedArray:(string|number|boolean)[] =[] //initialsing array to be a string or a number or a boolean
mixedArray.push('hello')
mixedArray.push(7)
mixedArray.push(false)

console.log(mixedArray)

//using union types on normal variables
let uid:string|number; //initialising variable as either a string or a number
uid = '123'
uid = "Sup Ninjas"

//& --- objects ---
let ninjaOne: object // initialsing variable as an object 
ninjaOne = {name: "Yoshi", age: 30}
ninjaOne = [] // ninjaOne can be an array, as an array is a kind pf object

let ninjaTwo: {
    name:string,
    age:number,
    beltColor:string
}
ninjaTwo = {name: 'mario', age: 30, beltColor: "purple"}