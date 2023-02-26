//^ =============== Function 1 ===============
let greet: Function

greet =() =>{
    console.log("Hello World")
}

//^ =============== Function 2 ===============
//? '?' is for optional arguments 
const add = (a: number, b:number, c?: number | string ) => {
    console.log(a + b)
}
add(69, 420)

//? The "string = 10" is setting this as a default value
const add1 = (a: number, b:number, c: number | string = 10) => {
    console.log(a + b)
}


//^ =============== Function 3 ===============
const minus = (a:number, b:number) => {
    return a + b // ? Typscript will infer the type, will know that the returned alue is a number. 
    
}

let result = minus(10,7)
// result = 'something else' //? cannot change the type as Typescript has infered that the type is a number. As per line 23


//? --- Explicity declare the type of return type of a function. ---
const minus1 = (a:number, b:number): number => {
    return a + b // ? Typscript will infer the type, will know that the returned alue is a number. 
    
}

let result1 = minus(10,7)
// result = 'something else' //? cannot change the type as Typescriot has infered that the type is a number. As per line 23
