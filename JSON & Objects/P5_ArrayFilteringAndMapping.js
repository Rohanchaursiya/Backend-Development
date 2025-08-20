function filterAndMapArray(arr) {

    const filteredArray = arr.filter(num => num % 2 !== 0);

    const mappedArray = filteredArray.map(num => num * num);

    return mappedArray;
}



let arr = [1, 2, 3, 4, 5, 6];
console.log(filterAndMapArray(arr));