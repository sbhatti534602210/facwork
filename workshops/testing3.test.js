const calcTestName = "Can add numbers";
const signTestName = "Valid sign";
const stringTestName = "Adding string";

test(calcTestName, () => {
    equal(calculate(1, "+", 2), 3);
    equal(calculate(3, "-", 2), 1);
    equal(calculate(4, "*", 3), 12);
    equal(calculate(4, "/", 2), 2);
    equal(calculate(3, "$", 2), "Enter a valid sign");
    equal(calculate("1", "+", "2"), 3);
    notEqual(calculate(3, "-", 2), 1);
    notEqual(calculate(3, "-", 2), 5);
});

test(signTestName, () => {
    equal(calculate(1, "+", 2), 3);
    equal(calculate(3, "-", 2), 1);
    equal(calculate(3, "$", 2), "Enter a valid sign");
    equal(calculate("1", "+", "2"), 3);
    notEqual(calculate(3, "$", 2), "Enter a valid sign");
    notEqual(calculate(3, "+", 2), "Enter a valid sign");
});

test(stringTestName, () => {
    equal(calculate(1, "+", 2), 3);
    equal(calculate(3, "-", 2), 1);
    equal(calculate(3, "$", 2), "Enter a valid sign");
    equal(calculate("1", "+", "2"), 3);
    notEqual(calculate(3, "$", 2), "Enter a valid sign");
    notEqual(calculate(3, "+", 2), "Enter a valid sign");
});

// challenge 2 test the form.
// equal(actual, expected, message)

const checkInputsTestName = "Calculates and updates page correctly";

test(checkInputsTestName, () => {
    const aInput = document.querySelector("input[name='a']"); // cannot just be input but must reference the id
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    const signInput = document.querySelector("select");
    const bInput = document.querySelector("input[name='b']");

    aInput.value = "2";
    signInput.value = "*";
    bInput.value = "3";

    const submitButton = document.querySelector("button[type='submit']");
    submitButton.click();

    const result = document.querySelector("#result");
    equal(result.textContent, "6");

    result.textContent = "";
});
// 
