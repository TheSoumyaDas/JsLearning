const coding = ["cpp", "js", "gatsby", "react", "next", "node"];

// when we store this in a variable, but forEach doesn't return anything when we try to return it will show undefined
// const loop = coding.forEach((val) => {
//   //   console.log(val);
//   return val;
// });

// so above ex will not return anything!

// New example
// here if we want values with condition check, this return values too
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// here we have to pass callback
const val = numbs.filter((nums) => nums > 4);
console.log(val);

// when we start a scope we have return something

const num = numbs.filter((val) => {
  return val > 7; // so when where you start a scope or create a scope always try to return it or else it will not return anything
});
console.log(num);

// if we want to check condition on forEach
const newNumArray = [];
numbs.forEach((num) => {
  if (num > 6) {
    newNumArray.push(num);
  }
});
console.log("Result::", newNumArray);

// Fliter: returns the reuslt if condition is allNumbers
// we can also filter with this project

const allBooks = [
  {
    bookName: "Book1",
    genre: "sciFic",
    price: 2330,
    publish: 2001,
  },
  {
    bookName: "Book2",
    genre: "History",
    price: 1222,
    publish: 2002,
  },
  {
    bookName: "Book3",
    genre: "sciFic",
    price: 4569,
    publish: 2004,
  },
  {
    bookName: "Book4",
    genre: "Comic",
    price: 233,
    publish: 1992,
  },
  {
    bookName: "Book5",
    genre: "science",
    price: 2330,
    publish: 1998,
  },
  {
    bookName: "Book6",
    genre: "biography",
    price: 1000,
    publish: 2014,
  },
];

const values = allBooks.filter((item) => {
  return item.genre === "sciFic";
});
console.log(values);

const price = allBooks.filter((item) => item.price === 2330);
console.log(price);

const checkPublishDate = allBooks.filter(
  (item) => item.publish >= 2000 && item.genre === "History"
);
console.log(checkPublishDate);

// map
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const allNewNums = allNumbers.map((val) => val >= 7); // now here it returns boolean value for this example (using map)
console.log("new::", allNewNums); // also map returns new array, as new we know about stack and heap
console.log("old", allNumbers);

const newAllNums = [];
allNumbers.forEach((item) => {
  let newVal = item + 5;
  return newAllNums.push(newVal);
});
console.log(newAllNums);

// chaining (one or more method can be used)
const chaining = allNumbers
  .map((item) => item * 10)
  .map((item) => item + 1)
  .filter((item) => item >= 40);

console.log("Chaining-Result:: ", chaining);

// Reduce

const reduceNums = [1, 2, 3];

const newReduceVal = reduceNums.reduce((acc, currVal) => {
  console.log(`acc:: ${acc} and currVal:: ${currVal}`);
  return acc + currVal; // so here acc is an empty var which takes value from which we have declared after curly barce (4)
}, 4);
console.log(newReduceVal);

const optimize = reduceNums.reduce((acc, currVal) => acc + currVal, 1); // works as same as aboveExample // optimize code
console.log(optimize);

// real World ex
const shoppingCart = [
  {
    courseName: "React.js",
    coursePrice: 3444,
  },
  {
    courseName: "Python",
    coursePrice: 3000,
  },
  {
    courseName: "Data-Science",
    coursePrice: 12999,
  },
  {
    courseName: "Node.js",
    coursePrice: 499,
  },
];

const reusltVal = shoppingCart.reduce((acc, item) => acc + item.coursePrice, 0);
console.log(reusltVal);
