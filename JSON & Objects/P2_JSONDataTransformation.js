function transformData(jsonArray) {
    return jsonArray.map(item => ({
        id: item.id,
        fullName: `${item.firstName + " " + item.lastName}`,
        isActive: item.age < 40 ? 'true' : 'false'
    }));
}

let jsonArray = [
    { id: 1, firstName: "John", lastName: "Doe", age: 30 },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 45 },
    { id: 3, firstName: "Alice", lastName: "Johnson", age: 35 }
];

console.log(transformData(jsonArray));