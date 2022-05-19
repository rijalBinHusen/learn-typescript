"use strict";
// classes
class Invoice {
    // readonly client: string; // you can only read this variable outside this class
    // private details: string; // you cant call this variable outside this class
    // public amount: number;
    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    constructor(client, // you can only read this variable outside this class
    details, // you cant call this variable outside this class
    amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("Rijal", "Work on the Rijal website", 250);
const invTwo = new Invoice("Husen", "Work on the Husen website", 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
// const form = document.querySelewoctor("form")!;
const form = document.querySelector(".new-item-form");
// console.log(form.children)
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
