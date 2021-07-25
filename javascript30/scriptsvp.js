// Get elements, build the functions then link the event listeners
// selecting the elements from the html 
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//when the play is called
function togglePlay() {
    
    // if (video.paused) {
    //     video.play();
    // }
    // else {
    //     video.pause();
    // }
    // change to ternary
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    // can also:
    // video[video.paused ? 'play' : 'pause']();
}

function updateButton() {
    // toggle button
    // console.log('Update the button');
    const icon = this.paused ? '►' : '❚❚';
    console.log(icon);
    toggle.textContent = icon;
}

function skip() {
    // see line 20-21 data-skip
    // console.log('skips');
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    // console.log(this.value);
    // console.log(this.name);
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    //a mouseevent
    console.log(e);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

//connect to event listeners
video.addEventListener('click', togglePlay);


//need to update the button once playing

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// add the progress bar
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

//skip buttons
skipButtons.forEach(button => button.addEventListener('click', skip));

//range sliders for volume and playback
//listen for a change event, not click event
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

//for scrubbing, i.e. move to where you want to
let mousedown = false;
progress.addEventListener('click', scrub);
// progress.addEventListener('mousemove', scrub);
//change it to passing an event, it checks the mousedown variable
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
// let mousedown 
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

//work on making the video full screen