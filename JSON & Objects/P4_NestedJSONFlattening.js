function flattenJSON(jsonObj) {
    let result = {};

    for (let key in jsonObj) {
        if (typeof jsonObj[key] === 'object' && !Array.isArray(jsonObj[key])) {
            const temp = flattenJSON(jsonObj[key]);
            for (let tempKey in temp) {
                result[key + "." + tempKey] = temp[tempKey];
            }
        } else {
            result[key] = jsonObj[key];
        }
    }
    return result;

}

let jsonObj = {
    name: "John",
    details: {
        address: {
            city: "New york",
            zip: "10001",
        },
        hobbies: ["reading", "gaming"],
    }
};

console.log(flattenJSON(jsonObj));