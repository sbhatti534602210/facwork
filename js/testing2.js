// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

// for challenge1
function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

//challenge2
function searchParamsToObject (formcodedstring) {
  const parameters = new URLSearchParams(formcodedstring);
  return Object.fromEntries(parameters);
}
// the test function is in testing2.test.js
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
// Object.fromEntries() method transforms a list of key-value pairs into an object.


// challenge 3
// Leap years usually occur every 4 years, but in order to stay consistent there are extra rules: years divisible by 100 are not leap years, and years divisible by 400 are leap years.
// For example 2020 and 2000 were leap years, but 1900 was not.
// It should take a year and either return an error message or a boolean

function isLeapYear (year) {
  if (typeof year !== "number") return "Year must be a number";
  if (year < 0) return "Only years after 0";
  if (year % 400 === 0) return true; 
  if (year % 100 === 0) return false; 
  if (year % 4 === 0) return true; 
  return false; 
}
