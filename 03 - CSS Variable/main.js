const inputLst = document.querySelectorAll(".controls input");

function handleUpdate() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputLst.forEach(input => input.addEventListener("change", handleUpdate));
inputLst.forEach(input => input.addEventListener("mousemove", handleUpdate));