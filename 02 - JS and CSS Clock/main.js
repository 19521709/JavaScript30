const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function clock() {
    const now = new Date();

    const sec = now.getSeconds();
    const secDeg = (sec / 60) * 360 + 90;
    secHand.style.transform = `rotate(${secDeg}deg)`;

    const min = now.getMinutes();
    const minDeg = (min / 60) * 360 + 90;
    minHand.style.transform = `rotate(${minDeg}deg)`;

    const hour = now.getHours();
    const hourDeg = (hour / 24) * 360 + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}
setInterval(clock, 1000);