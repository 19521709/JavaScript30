const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipBtns = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function handleClickPlayVideo() {
    const method = video.paused ? "play" : "pause";
    video[method]();
}
function handleUpdatePlayBtn() {
    toggle.textContent = this.paused ? "►" : "❚ ❚";
}
function handleClickSkipBtn() {
    video.currentTime += parseFloat(this.dataset.skip);
}
function handleChangeRangeSlider() {
    video[this.name] = this.value;
}
function handleUpdateProgressBar() {
    const percent = video.currentTime * 100 / video.duration;
    progressBar.style.flexBasis = `${percent}%`;
}
function handleChangeProgressBar(e) {
    const time = e.offsetX * video.duration / progress.offsetWidth;
    video.currentTime = time;
}


video.addEventListener("click", handleClickPlayVideo);
video.addEventListener("play", handleUpdatePlayBtn);
video.addEventListener("pause", handleUpdatePlayBtn);
video.addEventListener("timeupdate", handleUpdateProgressBar);
toggle.addEventListener("click", handleClickPlayVideo);
skipBtns.forEach(skipBtn => skipBtn.addEventListener("click", handleClickSkipBtn));
ranges.forEach(range => range.addEventListener("change", handleChangeRangeSlider));
ranges.forEach(range => range.addEventListener("mousemove", handleChangeRangeSlider));
let mouseDown = false;
progress.addEventListener("click", handleChangeProgressBar);
progress.addEventListener("mousemove", (e) => mouseDown && handleChangeProgressBar(e));
progress.addEventListener("mousedown", () => mouseDown = true);
progress.addEventListener("mouseup", () => mouseDown = false);