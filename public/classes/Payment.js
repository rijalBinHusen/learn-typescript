// classes
export class Payment {
    // readonly client: string; // you can only read this variable outside this class
    // private details: string; // you cant call this variable outside this class
    // public amount: number;
    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    constructor(recipient, // you can only read this variable outside this class
    details, // you cant call this variable outside this class
    amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owesd ${this.amount} for ${this.details}`;
    }
}
