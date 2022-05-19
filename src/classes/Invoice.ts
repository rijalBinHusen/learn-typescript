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
    constructor(
        readonly client: string, // you can only read this variable outside this class
        private details: string, // you cant call this variable outside this class
        public amount: number,
    ) {}

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
    
}