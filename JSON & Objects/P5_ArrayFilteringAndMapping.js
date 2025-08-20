function filterAndMapArray(arr) {

    const filteredArray = arr.filter(num => num % 2 !== 0).map(num => num * num);


    return filteredArray;
}



let arr = [1, 2, 3, 4, 5, 6];
console.log(filterAndMapArray(arr));