// // not entirely sure if this is needed
// document.querySelector("form").onsubmit = (event) => {
//   event.preventDefault();
//   validateWorkRequest(event.target.elements.work);
// };

// variables that will be compared against or changed
const validemail = /\S+@\S+\.\S+/; //double-check
let validornot = ""
let requestDetails = [];
const robotString = "Honestly, I really am not a robot."
const wrLength = 300;
let isValidEmail = false;
let isValidWR = false;
let isValidRobot = false;

// get and name the textarea values
const clientinput = document.getElementById("clientname");
const cemailinput = document.getElementById("clientemail");
const workinput = document.getElementById("workrequest");
const robotinput = document.getElementById("verifyrobot");

//this writes the robot test phrase to page
const robotoutput = document.querySelector(".verifystring");
robotoutput.innerHTML = robotString;

// get also where the warnings will be written
const confirmedrequest = document.querySelector(".confirmrequest"); // only used when using innerHTML
const checkedemail = document.querySelector(".checkemail");
const checkedwrlength = document.querySelector(".checkwr");
const verifiedrobot = document.querySelector(".verified");

// check email address as it's typed
cemailinput.addEventListener("keyup", function() {
  checkedemail.innerHTML = cemailinput.value;
  validateCEmail(cemailinput.value);
});

// check work request length as it's typed
workinput.addEventListener("keyup", function () {
  validateWorkRequest(workinput.value.length);
});

// check robot verification as it's typed
robotinput.addEventListener("keyup", function () {
  robotVerification(robotinput.value);
})

// on submitting the form, check again and write back to page
// console.dir(requestDetails);
const submitBtn = document.getElementById("submitWR");
submitBtn.addEventListener("click", function() {
  requestDetails = [
    "Work request description", 
    `name: ${clientinput.value}`, 
    `email: ${cemailinput.value}`, 
    `work request: ${workinput.value}`
  ];
  // console.log(cemailinput.value, workinput.value.length, robotinput.value, requestDetails);
  console.log(requestDetails);
  isValidEmail = validateCEmail(cemailinput.value);
  isValidWR = validateWorkRequest(workinput.value.length);
  isValidRobot = robotVerification(robotinput.value);
  if (isValidEmail === true && isValidWR === true && isValidRobot === true) {
    const ul = generateWRDescription(requestDetails);
    if (ul) {
      submitBtn.insertAdjacentElement("afterend", ul);
    }
  }
  else {
    confirmedrequest.innerHTML = "Please check highlighted form fields and retry.";
  }
}
);

// validator functions
// check email name@domain.com/co.uk/etc using regex set above
function validateCEmail (address) {
  if (validemail.test(address)) {
    cemailinput.setAttribute("aria-invalid", false);
    validornot = " -> valid email.";
    isValidEmail = true;
  }
  else {
    cemailinput.setAttribute("aria-invalid", true);
    validornot = " -> invalid email. Check and re-enter";
    isValidEmail = false;
  }
  checkedemail.innerHTML = cemailinput.value+validornot;
  return isValidEmail;
}

// check length of work request which is set above
function validateWorkRequest(length) {
    if (length > wrLength) {
    workinput.setAttribute("aria-invalid", true);
    checkedwrlength.innerHTML = `Work request is too long, ${length} characters. Check and edit`;
    isValidWR = false;
  }
  else {
    workinput.setAttribute("aria-invalid", false);
    checkedwrlength.innerHTML = `Work request is ok, ${length} characters.`;
    isValidWR = true;
  }
  return isValidWR;
}

// checking against a verification phrase set above
function robotVerification(phraseCheck) {
  if (phraseCheck === robotString) {
    verifiedrobot.innerHTML = `I have seen things you people would not believe.\n
    Attack ships on fire off the shoulder of Orion... \n
    But I believe you are not a robot, you may submit your request.`;
    robotinput.setAttribute("aria-invalid", false);
    isValidRobot = true;
  }
  else {
    verifiedrobot.innerHTML = `Danger, Will Robinson. \n
    You seem to be a robot. \n
    Check and re-enter.`;
    robotinput.setAttribute("aria-invalid", true);
    isValidRobot = false;
  }
  return isValidRobot;
}

// confirming the request submitted by writing to page
function generateWRDescription(wrArray) {
  console.dir(wrArray);
  const ulelement =document.createElement('ul');
  ulelement.style.listStyleType= "none";
  console.log(ulelement);
  wrArray.forEach(element => 
    { 
      console.log(element);
      const lielement = document.createElement('li');
      const inputitem = document.createTextNode(element);
      lielement.appendChild(inputitem);
      ulelement.appendChild(lielement);
    });
    return ulelement; 
}

// use style sheet to remove the bullets
