// Primitive
let good: string;
let okay;
let bad: number;
let everyThing: any;

good = "Darshan";
okay = "Darshan";
bad = "Darshan"; // this will show error
everyThing = "Darshan";

let instantInitialize:string = "Lyo";

// Arrays
let strArr1: string[];
let strArr2: Array<string>;

// Multiple variables not typed same as cpp
let x1, x2: string;
x1 = 1;
x2 = 1; // here only x2 will show err because string is only applied to that.
// There is no short-cut, repeat type for each variable

// Tuples
let strNumstrTuple1: [string, number, string];
let strNumstrTuple2: [string, number, string];
let strNumstrTuple3: [string, number, string];

strNumstrTuple1 = ["hELLO", 1, "yo"];
strNumstrTuple2 = ["yo", "HI", "Yo"]; // shows error since format does not match
strNumstrTuple3 = ["hELLO", 1, "yo", 1, "bro"]; // also error since size does not match.

console.log(good, okay, bad, everyThing);
// All the data-type errors are only shown in terminal for programmers,
// and does not affect output on browser.
