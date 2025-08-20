function sortAndReduceArray(arr) {
    if (arr.length < 3) {
        return "Array must contain at least 3 elements.";
    }
    const sortedArray = arr.sort((a, b) => b - a);

    return sortedArray[0] * sortedArray[1] * sortedArray[2];

}


let arr = [5, 3, 8, 2, 1, 9];
console.log(sortAndReduceArray(arr));