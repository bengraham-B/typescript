import { Invoice } from'./classes/Invoice' //^ it's 'Invoice.js' beacuse Typescript will import a JS file not a TS file.



const invOne = new Invoice('Mario', "work on the Mario Website", 250)
const invTwo = new Invoice('Luigi', "work on the Luigi Website", 300)
console.log(invOne, invTwo)

//^ Only objects created using the invoice array can be added to the 'invoices' array. 
let invoices:Invoice[] = []
invoices.push(invOne, invTwo)

invoices.forEach((inv) => {
    console.log(inv.client, inv.details, inv.amount, inv.format())
})
