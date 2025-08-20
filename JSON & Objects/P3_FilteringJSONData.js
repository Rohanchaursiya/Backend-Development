function filterByCriteria(jsonArray, criteria) {
    return jsonArray.filter(item => Object.keys(criteria).every(key => item[key] === criteria[key]));
}

let jsonArray = [
    { id: 1, name: "John", age: 25, city: "New York" },
    { id: 2, name: "Jane", age: 30, city: "Chicago" },
    { id: 3, name: "Emily", age: 25, city: "New York" },
];

let criteria = { age: 25, city: "New York" };
console.log(filterByCriteria(jsonArray, criteria));