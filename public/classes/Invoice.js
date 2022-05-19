// classes
export class Invoice {
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
