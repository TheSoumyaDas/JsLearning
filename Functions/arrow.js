// arrow function and this keyword

// this in browser will show window object, but using in node it will show empty object {}
const user = {
  username: "soumya",
  age: 22,
  welcomeMessage: function () {
    console.log(this); // but inside this targeting the inside scope values
    return `${this.username} is ${this.age}`; // so here this will only target the scope vaules the values inside the user, outside it will access
  },
};
console.log(user.welcomeMessage());

// but outside this will show only empty object
console.log(this);

// Note::
// using normal function
function chai() {
  console.log(this);
  let username = "OK";
  console.log(this.username); // so this will not work because this mostly works in objects you can't use this in using normal functions because it's global object
}
// chai();

// Arrow Function decelration "() => {}"

// explicit return
const arrowFucntion = (num1, num2) => {
  console.log(this);
  return num1 + num2;
};

console.log(arrowFucntion(4, 6));

// How to implicit return
const addTwo = (num3, num4) => num3 + num4;
// you can also do this way too // const addTwo = (num3, num4) => (num3 + num4) // by covering with parenthesis
console.log(addTwo(88, 6));

// How to return object using arrow func or using implicit return
const createPerson = (name, age) => ({ username: "Soumya" }); // so when we return objects in func the use parenthesis first and inside curly bareces
