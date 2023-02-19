let ageAny:any = 25;

ageAny = true
console.log(ageAny)

ageAny = 'Hello'
console.log(ageAny)

ageAny = {name: 'Luige'}
console.log(ageAny)



let mixed5:any[] = [];
mixed5.push(5)
mixed5.push("mario")
mixed5.push(false)

console.log(mixed5)



let ninja5 : {
    name:any,
    age:any
}

ninja5 = {name:"Yoshi", age:25}
console.log(ninja5)

ninja5 = {name:25, age:"Yoshi"}
console.log(ninja5)