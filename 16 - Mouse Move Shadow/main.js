const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100;

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = x * walk / width - walk / 2;
    const yWalk = y * walk / height - walk / 2;
    text.style.textShadow = `${xWalk}px ${yWalk}px 0 red,
                            ${-xWalk}px ${-yWalk}px 0 blue,
                            ${yWalk}px ${xWalk}px 0 green,
                            ${-yWalk}px ${-xWalk}px 0 yellow`;
}

hero.addEventListener("mousemove", shadow);