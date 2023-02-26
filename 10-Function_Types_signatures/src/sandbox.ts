// let greet: Function

//! ============= Example 1 =============
//! This is a function signature
let greet: (a:string, b:string) => void

//! This is following the function signature above on line 4.
greet = (name:string, greeting:string) => {
    console.log(` ${name} says ${greeting}`)
}

//* ============= Example 1 =============
let calc: (a:number, b:number, c:string) => number

calc = (numOne:number, numTwo:number, action:string) => {
    if(action === 'add') {
        return numOne + numTwo
    }
    
    else {
        return numOne - numTwo
    }

}


//^ ============= Example 3 =============
let logDetails: (obj: {name:string, age:number}) => void


logDetails = (ninja: {name:string, age:number}) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}

//^ using a type wthin the function
type person = {name:string, age:number}

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}
