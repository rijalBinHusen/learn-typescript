import { HasFormatter } from "../interfaces/HasFormatter.js"

// classes

export class Payment implements HasFormatter {
    // readonly client: string; // you can only read this variable outside this class
    // private details: string; // you cant call this variable outside this class
    // public amount: number;

    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    constructor(
        readonly recipient: string, // you can only read this variable outside this class
        private details: string, // you cant call this variable outside this class
        public amount: number,
    ) {}

    format() {
        return `${this.recipient} is owesd ${this.amount} for ${this.details}`;
    }
    
}