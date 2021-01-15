// Primitive
var good;
var okay;
var bad;
var everyThing;
good = "Darshan";
okay = "Darshan";
bad = "Darshan"; // this will show error
everyThing = "Darshan";
var instantInitialize = "Lyo";
// Arrays
var strArr1;
var strArr2;
// Multiple variables not typed same as cpp
var x1, x2;
x1 = 1;
x2 = 1; // here only x2 will show err because string is only applied to that.
// There is no short-cut, repeat type for each variable
// Tuples
var strNumstrTuple1;
var strNumstrTuple2;
var strNumstrTuple3;
strNumstrTuple1 = ["hELLO", 1, "yo"];
strNumstrTuple2 = ["yo", "HI", "Yo"]; // shows error since format does not match
strNumstrTuple3 = ["hELLO", 1, "yo", 1, "bro"]; // also error since size does not match.
console.log(good, okay, bad, everyThing);
// All the data-type errors are only shown in terminal for programmers,
// and does not affect output on browser.
