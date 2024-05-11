function debounce(func, wait = 0, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    }
}

const imgLst = document.querySelectorAll(".slide-in");
function checkSlide() {
    imgLst.forEach(img => {
        const slideInAt = window.scrollY + window.innerHeight - img.height / 2;
        const bottomOfImg = img.offsetTop + img.height;
        const isHalfScrolled = slideInAt > img.offsetTop;
        const isPassedScrolled = window.scrollY > bottomOfImg;
        if (isHalfScrolled && !isPassedScrolled) img.classList.add("active");
        else img.classList.remove("active");
    })
}
window.addEventListener("scroll", debounce(checkSlide));

