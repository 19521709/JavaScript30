const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];
function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}
const p = document.querySelector("p");
console.log("Hello i am a %s string", "💩");
console.log("%c I am some great text", "color:red;");
console.warn("OH NOOO");
console.error("Shit!");
console.info("Crocodiles eat 3-4 people per year");
console.assert(1 === 1, "That is wrong!");
//console.clear();
console.log(p);
console.dir(p);
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.time("fetching data");
fetch("https://api.github.com/users/wesbos").then(data => data.json()).then(data => {
    console.timeEnd("fetching data");
    console.log(data);
})
console.table(dogs);