import { Payment } from "./classes/Payment.js"
import { Invoice } from "./classes/Invoice.js"
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListsTemplate } from "./classes/ListstTemplate.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// lists template instant
const ul = document.querySelector('ul')!;
const list = new ListsTemplate(ul);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if(type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }

    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    list.render(doc, type.value, 'end')
})

// #GENERICS

// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100)
//     return { ...obj, uid}
// }

// let docOne = addUID({name: "rijal", age: 27})
// let docTwo = addUID({name: "rijal2"})

// console.log(docOne)
// console.log(docTwo)

//  with interface

interface Resource <T> {
    uid: number;
    resourceName: string;
    resourceType: ResourceType;
    data: T;
}

// enum
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

const docThree: Resource <object> = {
    uid: 1,
    resourceName: "people",
    resourceType: ResourceType.BOOK,
    data: { name: "rijal" }
}

const docFour: Resource <string[]> = {
    uid:2,
    resourceType: ResourceType.PERSON,
    resourceName: "people2",
    data: ["lorem", "ipsum", "dolor"]
}

console.log(docThree, docFour);