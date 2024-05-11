const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

function handleMousemove(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.5;
    const max = 2;
    const height = Math.round(percent * (100 - 10) + 10) + "%";
    console.log(height);
    bar.style.height = height;
    const playbackRate = (max - min) * percent + min;
    bar.textContent = playbackRate.toFixed(2) + "x";

    video.playbackRate = playbackRate;
}
speed.addEventListener("mousemove", handleMousemove)