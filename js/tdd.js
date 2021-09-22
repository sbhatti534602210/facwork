console.log("hello");

function map(array, fn) {
  if (!Array.isArray(array)) return "Pass an array";
  if (typeof fn != "function") return "Pass a function";
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const mappedItem = fn(item);
    result.push(mappedItem);
  }
  return array;
}
