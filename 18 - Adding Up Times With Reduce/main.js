const timeNodes = [...document.querySelectorAll("[data-time]")];
const secs = timeNodes.map(node => node.dataset.time).map(time => {
    const [min, sec] = time.split(":").map(parseFloat);
    return min * 60 + sec;
}).reduce((total, vidSec) => total + vidSec);

let secsLeft = secs;
const hours = Math.floor(secsLeft / 3600);
secsLeft = secsLeft % 3600;
const mins = Math.floor(secsLeft / 60);
secsLeft = secsLeft % 60;

console.log("%d:%d:%d", hours, mins, secsLeft);