"use strict";
//& --------- Classes ---------
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Mario', "work on the Mario Website", 250);
const invTwo = new Invoice('Luigi', "work on the Luigi Website", 300);
console.log(invOne, invTwo);
//^ Only objects created using the invoice array can be added to the 'invoices' array. 
let invoices = [];
invoices.push(invOne, invTwo);
invOne.client = 'Yoshi';
invTwo.amount = 400;
console.log(invoices);
const form = document.querySelector(".new-item-form");
// console.log(form.children)
//? Grabbing the inputs 
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
