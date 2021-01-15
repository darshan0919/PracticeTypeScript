function getSum(a: number, b: number): number {
  return a + b;
}
console.log(getSum(5, 5));

let x: number;
x = getSum(5, 5);

let y = "5";
let z = x + y; // No error since z is not restricted, though x is restricted
console.log(z);

let lol: string;
lol = getSum(x, x); //Error because getSum return number type.
console.log(lol);

let check1 = getSum(3); //Error because number of parameters are lesser.
let check2 = getSum(3, 3, 3); //Error because number of parameters are more.

function getSum2(a: any, b?: number) {
  return a + b;
}

let check3 = getSum2(1); //No Error because second parameter is now optional
console.log(check3); //NaN

console.log(typeof getSum2(1, 2)); //number
console.log(typeof getSum2("1", 2)); //string
