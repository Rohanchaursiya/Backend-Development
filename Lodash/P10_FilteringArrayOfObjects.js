const _ = require('lodash');
let data = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Alice", age: 35 }
];
let propertyName = "age";
let propertyValue = 30;

// Filtering the array of objects based on a specific property value
let filteredData = _.filter(data, item => item[propertyName] === propertyValue);
console.log(filteredData);

