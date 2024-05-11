let pressedArr = [];
const secretCode = "wesbos";
window.addEventListener("keyup", (e) => {
    pressedArr.push(e.key);
    pressedArr.slice(-secretCode.length - 1, pressedArr.length - secretCode.length);
    if (pressedArr.join("").includes(secretCode)) cornify_add();
})