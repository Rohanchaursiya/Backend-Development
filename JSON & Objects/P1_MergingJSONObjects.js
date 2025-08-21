function mergeJsonObjects(obj1, obj2) {
    const mergedObj = { ...obj1 };

    for (const key in obj2) {
        const value1 = mergedObj[key];
        const value2 = obj2[key];
        // define a helper function to check the type
        if (typeof value2 === 'object' && value2 !== null && !Array.isArray(value2) &&
            typeof value1 === 'object' && value1 !== null && !Array.isArray(value1)) {
            mergedObj[key] = mergeJsonObjects(value1, value2);
        } else {
            mergedObj[key] = value2;
        }
    }
    return mergedObj;
}

let obj1 = {
    name: "John",
    age: 30,
    details: {
        hobbies: ["reading", "gaming"],
        profession: "developer"
    }
};

let obj2 = {
    age: 25,
    details: {
        hobbies: ["traveling"],
        city: "New York"
    }
};

console.log(mergeJsonObjects(obj1, obj2));



//------ Spread Operator Example ------
// console.log({ ...obj1, ...obj2 });
// {
//   name: 'John',
//   age: 25,
//   details: { hobbies: [ 'traveling' ], city: 'New York' }
// }



//------ Object.assign Example ------
// console.log(Object.assign({}, obj1, obj2));
// {
//   name: 'John',
//   age: 25,
//   details: { hobbies: [ 'traveling' ], city: 'New York' }
// }


