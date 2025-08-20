function deepFreeze(obj) {
    if (obj && typeof obj !== 'object' && !Object.isFrozen(obj)) {
        return obj;
    }
    Object.freeze(obj);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (typeof value === 'object' && value) {
                deepFreeze(value);
            }
        }
    }
    return obj;
}
let obj = {
    name: "John",
    details: {
        hobbies: ["reading", "gaming"],
        address: {
            city: "New York",
            zip: "10001"
        }
    }
};

console.log(deepFreeze(obj));
obj.details.address.city = "Visakhapatnam";
console.log(obj);
