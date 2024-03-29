//& --------- Classes ---------

class Invoice{
    client:string
    details:string
    amount:number

    constructor(c:string, d:string, a:number){
        this.client = c
        this.details = d
        this.amount = a

    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('Mario', "work on the Mario Website", 250)
const invTwo = new Invoice('Luigi', "work on the Luigi Website", 300)
console.log(invOne, invTwo)

//^ Only objects created using the invoice array can be added to the 'invoices' array. 
let invoices:Invoice[] = []

invoices.push(invOne, invTwo)

 
invOne.client = 'Yoshi'
invTwo.amount = 400

console.log(invoices)







const form = document.querySelector(".new-item-form") as HTMLFormElement
// console.log(form.children)

//? Grabbing the inputs 
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit',(e:Event) =>{
    e.preventDefault()
    console.log(
        type.value, 
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )


})



