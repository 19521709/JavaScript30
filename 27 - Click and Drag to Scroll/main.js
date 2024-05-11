const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

function handleMousedown(e) {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}
function handleMouseleave() {
    isDown = false;
    slider.classList.remove("active");
}
function handleMouseup() {
    isDown = false;
    slider.classList.remove("active");
}
function handleMousemove(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
}


slider.addEventListener("mousedown", handleMousedown)
slider.addEventListener("mouseleave", handleMouseleave)
slider.addEventListener("mouseup", handleMouseup)
slider.addEventListener("mousemove", handleMousemove)