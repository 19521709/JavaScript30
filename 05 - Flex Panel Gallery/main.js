const panelLst = document.querySelectorAll(".panel");

function toggleOpen() {
    this.classList.toggle("open");
}

function toggleActive(e) {
    if (e.propertyName.includes("flex-grow")) this.classList.toggle("open-active");
}

panelLst.forEach(panel => panel.addEventListener("click", toggleOpen));
panelLst.forEach(panel => panel.addEventListener("transitionend", toggleActive));
