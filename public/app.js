import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
import { ListsTemplate } from "./classes/ListstTemplate.js";
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// lists template instant
const ul = document.querySelector('ul');
const list = new ListsTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// tuples
// let arr = ["Rijal", "Bin", "Husen"];
// arr[0] = false
// arr[1] = 123123
// arr = [ 30, false, "Bang" ]
let tup = ["Rijal", 27, true];
tup[0] = "asdasd";
tup[1] = 12312312;
tup[2] = false;
// // #GENERICS
// // const addUID = <T extends {name: string}>(obj: T) => {
// //     let uid = Math.floor(Math.random() * 100)
// //     return { ...obj, uid}
// // }
// // let docOne = addUID({name: "rijal", age: 27})
// // let docTwo = addUID({name: "rijal2"})
// // console.log(docOne)
// // console.log(docTwo)
// //  with interface
// interface Resource <T> {
//     uid: number;
//     resourceName: string;
//     resourceType: ResourceType;
//     data: T;
// }
// // enum
// enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
// const docThree: Resource <object> = {
//     uid: 1,
//     resourceName: "people",
//     resourceType: ResourceType.BOOK,
//     data: { name: "rijal" }
// }
// const docFour: Resource <string[]> = {
//     uid:2,
//     resourceType: ResourceType.PERSON,
//     resourceName: "people2",
//     data: ["lorem", "ipsum", "dolor"]
// }
// console.log(docThree, docFour);
