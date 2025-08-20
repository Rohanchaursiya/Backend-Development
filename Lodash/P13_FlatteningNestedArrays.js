const _ = require("lodash");

let nestedArray = [1, [2, [3, [4]], 5]];

// const flattenArray = _.flatten(nestedArray);
// console.log(flattenArray);

// const depthFlattenArray = _.flattenDepth(nestedArray, Infinity);
// console.log(depthFlattenArray);


const deepFlattenArray = _.flattenDeep(nestedArray);
console.log(deepFlattenArray);




