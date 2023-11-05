const myArr = [0, 1, "soumya", true]; // Array is defined using Square Brackets and in that bracekets the values are called elements and it can any datatype

//how to access the array elements
console.log(myArr[2]);

//we can also decalre the arrays like this too
const heros = new Array("hello", 7, 8);
console.log(heros);
console.log(heros[0]);

// Arrays are the shallow copy and deep copy

//Arrays Methods
let arrays = [0, 1, 2, 3, 4, 5];
//how to add the elements in an existing array
arrays.push(6, 9);

// pop's helps to remove the last element of the array
arrays.pop();

//unshift helps to add the value in elements at starting, but is unoptimized so use it wisely
arrays.unshift(9);

// shift helps to remove the value in an array at starting
arrays.shift();

console.log(arrays);

// includes and indexOf {Includes gives boolean value if the element exists or not} {indexOf gives index of the exisitng array it gives the position of the element}
console.log(arrays.includes(5));
console.log(arrays.includes(8));

console.log(arrays.indexOf(5));
console.log(arrays.indexOf(9));

//join() method
//join method helps to join all the array elements bind them and convert them into string!
const person = ["soumya", "nitin"];
console.log(person.join());

//slice splice
// The main differnce between splice and slice is slice helps to slice the value and gives you the result of the sliced array
const ice = [1, 2, 3, 45, 6];
console.log(ice);
console.log(ice.slice(2, 4)); // in this it will start from 2nd index and end on 3rd index

// and splice removes the elements in an array and it also change the elements of the array => the remaining elements
console.log(ice.splice(2, 4));
console.log(ice);

// Learn more about slice and splice
