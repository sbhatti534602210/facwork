// For testing2.html Learn unit testing

// challenge1
const testText = "The function should create a valid URL";

const testName1 = "pikachu";
const expectedURL1 = "https://pokeapi.co/api/v2/pikachu";
const testName2 = "bulbasaur";
const expectedURL2 = "https://pokeapi.co/api/v2/bulbasaur";
const testName3 = "saira";
const expectedURL3 = "https://pokeapi.co/api/v2/snorlax";

// (actual, expected, message)
test(testText, () => {
    equal(makeUrl(testName1), expectedURL1);
    equal(makeUrl(testName2), expectedURL2);
    equal(makeUrl(testName3), expectedURL3);
    notEqual(makeUrl(testName2), expectedURL2);
});

// challenge2
// function is in testing2.js
const testText2 = "searchParamsToObject function should create an object from a string";
const searchParam1 = "name=oliver&email=hello@oliverjam.es";
const resultObject = 

test(testText2, () => {
    const actual = searchParamsToObject(searchParam1);
    const expected = { name: "oliver", email: "hello@oliverjam.es" };
    equal(actual.name, expected.name);
    equal(actual.email, expected.email);
    notEqual(actual.name, expected.name);
});

// challenge
// remember equal & notEqual functions require actual, expected, message as parameters, the actual will be the function call(the function being tested)
//leap year
const validInputMsg = "Valid function input should be a number.";
const multiple4Msg = "Valid function input should be a multiple of 4.";
const multiple100Msg = "Valid function input should not be a multiple of 100.";
const multiple400Msg = "Valid function input should be a multiple of 400.";
const stringInput = "2002";
const negativeInput = -4;
const notLeap100 = 1900;
const notLeap4 = 2013;
const notLeap = 2021;
const leap = 2020;

test(validInputMsg, () => {
    equal(isLeapYear(stringInput), "Enter a number", "Input should be a number");
    equal(isLeapYear(negativeInput), "Year must be after 0.", "Input should be positive.");
    equal(isLeapYear(notLeap100), false, "This is not a leap year");
});

test(multiple4Msg), () => {
    equal(isLeapYear(notLeap4), true, "I don't know");
    equal(isLeapYear(2024), true, "I don't know");
    notEqual(isLeapYear(2020), true, "I don't know2");
}

test(multiple100Msg), () => {
    equal(isLeapYear(notLeap100), true, "I don't know");
    equal(isLeapYear(2024), true, "I don't know");
    equal(isLeapYear(300), true, "I don't know");
    notEqual(isLeapYear(300), true, "I don't know2");
}

test(multiple400Msg), () => {
    equal(isLeapYear(notLeap400), true, "I don't know");
    equal(isLeapYear(2024), true, "I don't know");
    notEqual(isLeapYear(2020), true, "I don't know2");
}


