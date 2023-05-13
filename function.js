const axios = require('axios');

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  isUndefined: () => undefined,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "steve" };
    user["lastName"] = "paul";
    return user;
  },
  fetchUser: () => axios.get("https://jsonplaceholder.typicode.com/users/1")
  .then(response =>response.data)
  .catch(error => console.log(error))
};

module.exports = functions;
