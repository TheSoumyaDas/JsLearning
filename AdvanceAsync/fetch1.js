/**
 *  Fetch Api excepts two params => 1. URL 2. Optional Parameters(such as method: POST, PUT, GET)
 */

// Here we have learned about promises and fetch in deep and throughly.

// Intially the when Promise runs,
// it returns an empty object as undefined but after the certain time after it get's resolved the undefined property fills automatically.

// TODO: Promise is an object representing the eventual completion or failure of an async operation.

// Callback Hell --> Example
// createOrder(cart, function (orderId) {
//   proccedToPayment(orderId, function (payment) {
//     orderSummary(payment, function (updateWallet) {
//       updateWallet();
//     });
//   });
// });

// Callback hell was hard to maintain, non-readable

// we always return a promise from promise while chaining

//Creating an Promise

const cart = ["shoes", "pants", "kurta"];

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderId = "123";
    if (orderId) {
      resolve(orderId);
    }
  });

  return pr;
}

function validateCart(cart) {
  return true;
}

function proccedToPayment() {
  return new Promise(function (resolve, reject) {
    resolve("Payment Succesfull");
  });
}

// promise is called

const promise = createOrder(cart);
promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return proccedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    // to handle error gracefully, whenever you call promise always write catch.
    console.log(err.message);
  });
