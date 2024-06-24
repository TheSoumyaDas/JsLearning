// Scenario 1
async function getAllUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log("res::>", res);
    const data = await res.json(); // here we changed the incoming res string into json, as we know response moslty comes as string.
    console.log("DATA::", data);
    return data;
  } catch (error) {
    console.log("Error::>", error);
  }
}

getAllUsers();

//Scenario 2
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    // this then is used to handle the above then.
    console.log("DATA::::>", data);
  })
  .catch((err) => err);

// 1. Note: all the network request always goes in onFulfilled[], as these are giving us some response. even error is 404,400,200,201
// 2. When fetch calls it invokes two things, the yellow line goes to memory for memory allocation and green line goes for request to find response,
//    after if the data is resolve or reject, it then goes to data and then data goes to Global Memory and this gives to response
// 3. And fetch is most high priority, so it executes first then any other async func. also the fetch goes to priority queque
