// truthy value and falsy value

const email = "soumya@email.com";

if (email) {
  // so here we haven't checked or applied any conditional methods, but then also it assumes as true, so here comes truthy and falsy values
  console.log("Your email is verified");
} else {
  console.log("hmmm. email is missing?");
}

/**
 * Falsy Values
 * false; ""; 0; BigInt: 0n; null; undefined; NaN; -0
 *
 *
 * Truthy Values
 * true; "not an empty string"/ "0" / "false" " "; 1; []; {}; function() {};
 *
 */

// how to check the if array in empty

const empty = [];

if (empty.length === 0) {
  console.log("Array is empty");
}

// this is how also check the length of an object
const object = {};

if (Object.keys(object).length === 0) {
  console.log("Object is empty");
}

// Note:

/**
 *
 * false == 0 => true
 * false == '' => true
 * 0 == '' => true
 *
 */

// Nullish Coalescing Operator (??)
