// testing map()

// test is called with name in "" and then the test function test(name, testFunction) arrow function is used which incorporates the equal test. test() is defined in the test-helpers file
// the equal function checks result of function against what is expected and console logs an message.

// should have started with test functions here.

// testing the map function
test("Test1 Map function needs an array and a function as arguments", () => {
  equal(map(), "Pass an array please.");
  equal(map([]), "Now pass a mapping function.");
});

test("Test2 Map function map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  // const result = map([], () => {});
  equal(Array.isArray(result), true);
  equal(result.length, 1);
});

// testing the actual functionality
test("Test3 map() should transform each element of the array using the fn argument", () => {
  // [1] is an example array for the test
  const result = map([1], (x) => x + 1);
  const expected = [2];
  // what the first item in the result array should be.
  equal(
    result[0],
    expected[0],
    "message output, function adds 1 to each element."
  );
});

// testing the filter function
//first one same as before
test("Test 4 filter function should take an array and a function as arguments", () => {
  equal(filter(), "Pass an array please.");
  equal(filter([]), "Now pass a mapping function.");
});

test("Test5 filter function should return an array.", () => {
  const result = filter([], () => {});
  equal(Array.isArray(result), true);
  const resulta = filter([1], () => true);
  equal(resulta[0], 1);
});

test("Test6 filter function should filter elements that don't meet the function test.", () => {
  const result = filter([1, 100, 6], (x) => x > 10);
  equal(result[0], 100);
  // the element at index 0 of the resulting array should be 100. (it's the only element.)
});

// testing the every function
test("Test7 every function shoud return true only if every element passes the function test.", () => {
  const result = every([2, 4, 6, 8, 10], (x) => x % 2 === 0);
  equal(result, true);
});

test("Test8 every function should return false is any element fails the function test.", () => {
  const result = every([2, 4, 5, 8, 10], (x) => x % 2 === 0);
  equal(result, false);
});

// testing the some function
// test("Test 9 some function should return true if any element passes the test", () => {
//   const result = some([1, 3, 6, 7, 9]);
//   equal(result, true);
// });

test("Test10 some function should return false if every element fails the test", () => {
  const result = some([1, 3, 5, 6, 7, 9], (x) => x % 2 === 0);
  equal(result, false);
});

// testing the find function
test("Test11 find function should return the first element that passes the test", () => {
  const result = find([3, 5, 9, 5, 4], (x) => x === 5);
  equal(result, 5);
});

test("Test12 find function should return false/undefined if no elements pass the test.", () => {
  const result = find([3, 4, 9, 6, 4], (x) => x === 5);
  equal(result, undefined);
});

test("Test13 reduce function should call the function for each element and use the return value as the new accumulator.", () => {
  const result = reduce([1, 2], (total, x) => total + x, 0);
  equal(result, 3);
});

// test("Test14 reduce function should use the first element of the array if no accumulator is passed.", () => {
//   const result = reduce([1, 2], (total, x) => total + x);
//   equal(result, 3);
// });

// testing the flat function
// test("Test15 flat function should take a nested array and return a single level array.", () => {
//   const result = flat([1, [2, 3]]);
//   equal(result[0], 1);
//   equal(result[1], 2);
//   equal(result[2], 3);
// });
// I didn't finish this one
