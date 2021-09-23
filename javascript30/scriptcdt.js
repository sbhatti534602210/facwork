let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
const breakType = document.querySelector(".display_breaktype");

function timer(seconds, breakTime) {
  clearInterval(countdown);
  //   setInterval(function () {
  //     seconds--;
  //   }, 1000);
  const now = Date.now();
  const then = now + seconds * 1000;
  console.log({ now, then }); //need to call it from the console.log, i.e. type timer(10)
  displayBreakType(breakTime);
  displayTimeLeft(seconds);
  displayEndTime(then);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    console.log(secondsLeft); //need to stop it before it gets negative
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayBreakType(breakTime) {
  breakType.textContent = `Gone for ${breakTime}`;
}

function displayTimeLeft(seconds) {
  //   console.log(seconds);
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  console.log({ minutes, remainderSeconds });
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  //   document.title = display; //do i need this?
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Will be back at ${hour}:${
    minutes < 10 ? "0" : ""
  }${minutes}.`;
}

buttons.forEach((button) => button.addEventListener("click", startTimer));

function startTimer() {
  console.log(this.textContent);
  const seconds = parseInt(this.dataset.time);
  const breakTime = this.textContent;
  timer(seconds, breakTime);
}

// time from the form (top right corner of page) "customForm"
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});
