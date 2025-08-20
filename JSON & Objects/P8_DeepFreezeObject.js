function deepFreeze(obj) {
    if (obj && typeof obj === 'object' && !Object.isFrozen(obj)) {
        Object.freeze(obj);
        Object.getOwnPropertyNames(obj).forEach(prop => deepFreeze(obj[prop]));
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
