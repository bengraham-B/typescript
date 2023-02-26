// const logDetails = (uid:string | number, item:string) => {
//     console.log(`${item} has a uid for ${uid}`)
// }

// const greet = (user:{name:string, uid:string | number}) => {
//     console.log(`${user.name} says Hello 👋`)
// }

//^ Covert the abpve to fnctions into  the bottom two with type laliases

//? type -> variable to store types
type StringOrNum = string | number 
type objWithname = {name:string, uid: StringOrNum}

const logDetails = (uid:StringOrNum, item:string) => {
    console.log(`${item} has a uid for ${uid}`)
}

const greet = (user:objWithname) => {
    console.log(`${user.name} says Hello 👋`)
}


