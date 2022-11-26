/*
Perform addition of various types (string + boolean, string + number, number + boolean)
Perform multiplication of various types (string * boolean, string * number, number * boolean)
Divide different types (string / boolean, string / number, number / Boolean)
Perform explicit conversion (number, string, boolean)
*/

let number = 12;
let string = '3';
let boolean = false;

//addition
console.log(string+boolean);
console.log(string+number);
console.log(number+boolean);
//multiplication
console.log(string*boolean);
console.log(string*number);
console.log(number*boolean);
//division
console.log(string/boolean);
console.log(string/number);
console.log(number/boolean);

//conversion
number = 'No more numbers';
string = null;
boolean = 14;

console.log('New number: ' + number + ', New string: ' + string + ', New boolean: ' + boolean)