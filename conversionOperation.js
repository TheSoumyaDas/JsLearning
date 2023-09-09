// To Check the type of the value => typeof
//You can use
let value = 33;
let letter = "abc";

console.log(typeof value);
console.log(typeof letter);

// What if i want the varaible value1 as string and letter1 as number

let value1 = String(33);
let letter1 = Number("33");

console.log(typeof value1);
console.log(typeof letter1);

// Now what if the varaible value is unqiue it includes string as well as number

let unique = "33abc";
let unique1 = Number(unique);
console.log(unique1); // => This shows NaN means Not a Number
console.log(typeof unique1);

//Boolean Values
// True => 1
// False => 0; undefined => Undefined; null => 0

//Notes to remember
/* 
    1 => True; 0 => False;
    "" => False;
    "Soumya" => True
*/
