// testing map()

test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});

// from workshop

test("map requires array and function arguments", () => {
  equal(map(), "pass the array please");
  equal(map([]), "pass a mapping function");
});

test("map should return an array", () => {
  const result = map([], () => {});
  equal(Array.isArray(result), true);
});

test("map should transform one element using function", () => {
  const result = map([1], (x) => x*2);
  equal(result[0], 2);
});

test("map should transform two elements using function", () => {
  const result = map([1, 2], (x) => x*2);
  equal(result[1], 4);
});

test("map should transform ten elements using function", () => {
  const result = map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (x) => x*2);
  equal(result[9], 20);
});

// try the filter testing