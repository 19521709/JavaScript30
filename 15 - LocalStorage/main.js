const addItem = document.querySelector(".add-items");
const itemLst = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function handleClickAddItem(e) {
    e.preventDefault();
    const text = (this.querySelector("[name=item]")).value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    populateLst(items, itemLst);
    localStorage.setItem("items", JSON.stringify(items));
    this.reset();
}
function populateLst(items = [], itemLst) {
    itemLst.innerHTML = items.map((item, index) => `
        <li>
            <input type="checkbox" data-index=${index} id="item-${index}" ${item.done ? "checked" : ""}/>
            <label for="item-${index}">${item.text}</label> 
        </li>
    `).join("");
}
function handleClickCheckbox(e) {
    if (!e.target.matches("input")) return;
    const element = e.target;
    const elementIndex = element.dataset.index;
    items[elementIndex].done = !items[elementIndex].done;
    localStorage.setItem("items", JSON.stringify(items));
    populateLst(items, itemLst);
}
addItem.addEventListener("submit", handleClickAddItem);
itemLst.addEventListener("click", handleClickCheckbox);
populateLst(items, itemLst);