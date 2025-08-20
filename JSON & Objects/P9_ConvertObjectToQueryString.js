function toQueryString(obj) {
    const params = [];

    for (const key in obj) {
        const value = obj[key];

        if (Array.isArray(value)) {
            value.forEach(item => {
                params.push(`${encodeURIComponent(key)}=${encodeURIComponent(item)}`);
            });
        } else {
            params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
    }
    return params.join('&');
}

let obj = {
    name: "John Doe",
    age: 30,
    hobbies: ["reading", "gaming"]
}

console.log(toQueryString(obj));
