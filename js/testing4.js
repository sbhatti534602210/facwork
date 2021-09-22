// function map(array) {
//   return array;
// }

// the array used in examples
const numberArray = [1, 2, 3];
// const numberArray = [1, 2, 3, 4, 5];
// const numberArray = [4, 5, 6];
// const numberArray = [-1, 0, 1];
// const numberArray = [0, 0, 1, 4, 6];
const unflatArray = [1, [2, [3]]];

//functions to be tested

// map
const mapArray1 = numberArray.map((x) => x + 1);
console.log("JS builtin map:", mapArray1);

// map function rewritten
function map(array, funct) {
  // match the messages in first test call in testing4.test.js
  if (!Array.isArray(array)) return "Pass an array please.";
  if (typeof funct !== "function") return "Now pass a mapping function.";
  // console.log(funct);
  const mappedArray = []; //this is the returned array
  array.forEach((element) => {
    // console.log(element);
    mappedArray.push(funct(element));
  });
  return mappedArray;
}
const mapArray2 = map(numberArray, (x) => x + 1);
console.log("Re-written map fn:", mapArray2);

// filter
const filterArray1 = numberArray.filter((x) => x > 1);
console.log("JS builtin filter:", filterArray1);

// filter function rewritten
function filter(array, funct) {
  if (!Array.isArray(array)) return "Pass an array please.";
  if (typeof funct !== "function") return "Now pass a mapping function.";
  // console.log(funct);
  const filteredArray = [];
  array.forEach((element) => {
    if (funct(element) === true) {
      filteredArray.push(element);
    }
  });
  return filteredArray;
}
const filterArray2 = filter(numberArray, (x) => x > 1);
console.log("Re-written filter fn:", filterArray2);

// every
const everyPositive1 = numberArray.every((x) => x > 0);
const everyNegative1 = numberArray.every((x) => x < 0);
console.log("JS builtin every +:", everyPositive1);
console.log("JS builtin every -:", everyNegative1);

// every function rewritten
function every(array, funct) {
  let everyTrue = true; // a boolean is returned not an array.
  array.forEach((element) => {
    if (funct(element) !== true) {
      everyTrue = false;
    }
  });
  return everyTrue;
}
const everyPositive2 = every(numberArray, (x) => x > 0);
const everyNegative2 = every(numberArray, (x) => x < 0);
console.log("Re-written every fn +:", everyPositive2);
console.log("Re-written every fn -", everyNegative2);

// some
const someGT21 = numberArray.some((x) => x > 2);
const someLT01 = numberArray.some((x) => x < 0);
console.log("JS builtin some >2:", someGT21);
console.log("JS builtin some <0:", someLT01);

// some function rewritten
function some(array, funct) {
  let someTrue = true;
  //I think this is wrong
  array.forEach((element) => {
    if (funct(element)) {
      someTrue = true;
    } else {
      someTrue = false;
    }
  });
  return someTrue;
}
const someGT22 = some(numberArray, (x) => x > 2);
const someLT02 = some(numberArray, (x) => x < 0);
console.log("Re-written some fn >2:", someGT22);
console.log("Re-written some fn <0:", someLT02);

// find
const found1 = numberArray.find((x) => x > 2);
console.log("JS builtin found:", found1);

// find function rewritten
function find(array, funct) {
  // console.log(`insidef ${funct}`);
  // console.log("arrr", array);
  //   // is this working
  let foundAt;
  array.forEach((element, index) => {
    if (funct(element) === true) {
      foundAt = index;
    }
    // console.log("ind", foundAt);
  });
  return array[foundAt];
}
const found2 = find(numberArray, (x) => x > 2);
console.log("Re-written found fn:", found2);

// reduce
const reduced1 = numberArray.reduce((total, x) => total + x, 0);
console.log("JS builtin reduce:", reduced1);

// reduce function rewritten
function reduce(array, funct, initialiser) {
  // console.log(`insidefn: ${array}, ${funct}, ${initialiser}`);
  let accumulator = initialiser;
  array.forEach((element) => {
    accumulator = funct(accumulator, element);
  });
  return accumulator;
}
const reduced2 = reduce(numberArray, (total, x) => total + x, 0);
console.log("Re-written reduce fn: ", reduced2);

// flat
const flattened1 = unflatArray.flat();
const flattened2 = unflatArray.flat(2);
console.log("JS builtin flat:", flattened1);
console.log("JS builtin flat:", flattened2);

// flat function rewritten
// function flat(array, level){
//   let flattened =[];

//   return flattened;
// }
// const flattened3 = flat(unflatArray);
// const flattened4 = flat(unflatArray, 2);
// console.log("flat fn:", flattened3);
// console.log("flat fn:", flattened4);
