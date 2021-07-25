/* CHALLENGE 1
1. Find the second paragraph on the page
2. Add a class of "highlight", or
3. Remove the class of "highlight" if already present
e.g. "<p class="para">Hello</p>" -> "<p class="para highlight">Hello</p>"
*/
function toggleHighlight() {
  // your code here
  const paragraphall = document.querySelectorAll('p');
  const paragraph2 = paragraphall[1];
  paragraph2.classList.toggle('highlight');
  console.log(paragraph2);
}

/* CHALLENGE 2
1. Take an array of strings as a parameter
1. Return a new `ul` containing an `li` containing a string for each element in the array
e.g. generateList(["hello", "world"]) -> <ul>
                                           <li>hello</li>
                                           <li>world</li>
                                          </ul>
*/
function generateList(array) {
  // your code here
  // console.log(array);
  const ulelement =document.createElement('ul');
  array.forEach(element => 
    { 
      const lielement = document.createElement('li');
      const fruit = document.createTextNode(element);
      // console.log(fruit);
      lielement.appendChild(fruit);
      // console.log(lielement.appendChild(fruit));
      ulelement.appendChild(lielement);
      // console.log(ulelement.appendChild(lielement));
    });
    return ulelement; //this seems to be necessary
}

/* CHALLENGE 3a
1. Take a `textarea` element as a parameter
2. Count how many characters have been typed into it
3. If it contains > 140 characters set the `aria-invalid="true"` attribute
*/
function validateTweet(textarea) {
  // your code here
  // console.log(textarea); //this gives the whole text area, including tag
  const tweetLength = textarea.value.length;
  if (tweetLength > 140) {
    // alert("Greater");
    textarea.setAttribute("aria-invalid", true);
  }
  else {
    // alert("ok");
    textarea.setAttribute("aria-invalid", false);
  }
}

/* CHALLENGE 3b
1. Find the textarea with ID "tweet"
2. Whenever a user types into it validate it using the previous function
*/
function validateTweetOnInput() {
  // your code here
  const tweet = document.getElementById("tweet");
  tweet.addEventListener("keydown", function(){ 
    validateTweet(tweet); 
  });
  // alert("key downed");
  // validateTweet(tweet);
}

/* CHALLENGE 4
1. Find all buttons with a classname of "toggle-button"
2. When each button is clicked show/hide the next sibling following the button
e.g. <button class="toggle-button">Toggle</button>
     <p>This should appear/disappear when the button is clicked</p>
*/
function setupToggleButtons() {
  // your code here
  // const allButtons = document.getElementsByClassName("toggle-button");
  const allButtons = document.querySelectorAll(".toggle-button");
  // console.dir(allButtons);
  
  // let nextItem = document.querySelector('p').nextSibling;
  // console.log(nextItem);
  // let nextSibling = document.querySelector('p').nextElementSibling;

  allButtons.forEach((toggleButton, index) => {
    // console.log(toggleButton, toggleButton.nextElementSibling, index);
    // target.addEventListener(type, listener, options); //from mozilla
    toggleButton.addEventListener("click", buttonevent => {
      // alert("button clicked", index);
      let nextPara = toggleButton.nextElementSibling;
      // isHidden = HTMLElement.hidden;//from mozilla
      // HTMLElement.hidden = true | false;
      console.log(nextPara, index, nextPara.hidden);
      // nextPara.hidden = true;
      // if (nextPara === true) {
      //   nextPara.hidden = false;
      // }
      // else {
      //   nextPara.hidden = true;
      // }
      // btn.addEventListener('click', function () {
      //   h1.hidden = !h1.hidden;
      //   h2.hidden = !h2.hidden;
      // }, false);
      //thing = !thing; //flipping a boolean
      nextPara.hidden = !nextPara.hidden;
    });
  }); 
}
