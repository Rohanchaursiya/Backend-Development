const _ = require('lodash');

let obj = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    email_id: "john@example.com"
};

console.log(_.mapKeys(obj, (value, key) => _.camelCase(key)));