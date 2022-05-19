// classes

class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes ${amount} for ${this.details}`;
    }
    
}

const invOne = new Invoice("Rijal", "Work on the Rijal website", 250);
const invTwo = new Invoice("Husen", "Work on the Husen website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices)

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