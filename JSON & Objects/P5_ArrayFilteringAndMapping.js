function filterAndMapArray(arr) {
    return arr.filter(num => num % 2 !== 0).map(num => num * num);
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(filterAndMapArray(arr));