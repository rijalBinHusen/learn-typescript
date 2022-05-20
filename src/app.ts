// interfaces
// interface IsPerson {
//     name: string,
//     age:  number,
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const me: IsPerson = {
//     name: "rijal",
//     age: 27,
//     speak(text: string): void{
//         console.log(text)
//     },
//     spend(amount: number): number{
//         console.log("I spend", amount)
//         return amount
//     }
// }

// const somePerson = (person: IsPerson) => {
//     console.log("Hello, ", person.name)
// }

// somePerson(me);

// console.log(me)
import { Payment } from "./classes/Payment.js"
import { Invoice } from "./classes/Invoice.js"
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("Rijal", "web work", 250);
docTwo = new Payment("Husen", "plumbing work", 200)

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo)

console.log(docs)

const invOne = new Invoice("Rijal", "Work on the Rijal website", 250);
const invTwo = new Invoice("Husen", "Work on the Husen website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format())
})

// const form = document.querySelewoctor("form")!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// console.log(form.children)

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.value,
    )
})