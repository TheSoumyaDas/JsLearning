// while comparing the any data remember if it has same datatype

// Difffernce between === & ==

console.log("2" === 2);
console.log("2" == 2);

// --------  Value:  Always write Clean Code ------------------

// ------------------ DataTypes Summary ----------------------

// Two Types
// Primitive Data-type -> String, Number, Boolean, Null, Undefined, Symbol, BigInt
// Reference (Non-Primitive) -> Array, Objects, Functions

// If you do this
let number = undefined; // ->  This will apply the value as undefined and if you don't put the undefined then also it works same
let number1;

console.log(number, number1);

// Stack and Heap Memory

// All the Primitive datatypes are in Stack memory
// All the Non-Primitive datatypes are in Heap memory

// whenever we want anything from stack we get copy of the value
// and when we wnat anything from heap then we get the same reference of the value

// Differnce between stack and heap

//stack
let person = "soumya";
let people = person;

people = "Soumya ranjan das";
console.log(person);
console.log(people);

//heap
let obj = {
  userName: "Soumya",
  userId: 24,
};

let result = obj;
result.userId = 23;
console.log(result);
console.log(obj);
