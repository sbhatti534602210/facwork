document.querySelector("form").onsubmit = (event) => {
    event.preventDefault();
    validateTweet(event.target.elements.tweet);
  };

  validateTweetOnInput();

  function validateTweet(textarea) {
    // your code here
    // console.log(textarea); //this gives the whole text area, including tag
    const jdLength = textarea.value.length;
    if (jdLength > 140) {
      // alert("Greater");
      textarea.setAttribute("aria-invalid", true);
    }
    else {
      // alert("ok");
      textarea.setAttribute("aria-invalid", false);
    }
  }

  function validateTweetOnInput() {
    // your code here
    const jd = document.getElementById("jd");
    jd.addEventListener("keydown", function(){ 
      validateTweet(jd); 
    });
    // alert("key downed");
    // validateTweet(tweet);
  }