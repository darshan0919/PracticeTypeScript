function getSum(a, b) {
    return a + b;
}
console.log(getSum(5, 5));
var x;
x = getSum(5, 5);
var y = "5";
var z = x + y; // No error since z is not restricted, though x is restricted
console.log(z);
var lol;
lol = getSum(x, x); //Error because getSum return number type.
console.log(lol);
var check1 = getSum(3); //Error because number of parameters are lesser.
var check2 = getSum(3, 3, 3); //Error because number of parameters are more.
function getSum2(a, b) {
    return a + b;
}
var check3 = getSum2(1); //No Error because second parameter is now optional
console.log(check3); //NaN
console.log(typeof getSum2(1, 2)); //number
console.log(typeof getSum2("1", 2)); //string
