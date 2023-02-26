//& --------- Classes ---------
//^ All properties of a class are public by default.
//^ - punblic: Default, we can chage and read the value, outside and inside the class.
//^ - private: Only read and change inside of the class
//^ - readonly: Only allows us to read both inisde and outside the class, but not change the value
class Invoice{
    readonly client:string
    details:string
    public amount:number

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

invoices.forEach((inv) => {
    console.log(inv.client, inv.details, inv.amount, inv.format())
})

//* ###########################################################################################################
//*                            CREATING A SHORTHAND VERSION OF THE CLASS ABOVE:
//* ###########################################################################################################

class InvoiceShortHand {
    constructor(
        readonly client:string,
        private details:string, //^ Does not print to the console <private>
        public amount:number
    ){

    }
    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOneSh = new InvoiceShortHand('Mario', "work on the Mario Website", 250)
const invTwoSh = new InvoiceShortHand('Luigi', "work on the Luigi Website", 300)

let invoicesSh:InvoiceShortHand[] = []
invoicesSh.push(invOneSh, invTwoSh)
console.log(invoicesSh)


