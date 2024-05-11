const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const person = {
    name: 'Wes Bos',
    age: 80
};

let age = 100;
let age2 = age;
console.log(age, age2); // should be 100 and 100
age = 200;
console.log(age, age2); // will be 200 and 100
// => Copy

// const team = players;
// console.log(players, team); // same
// team[3] = "Lux";
// console.log(players, team); // still same
// => Reference

const team2 = players.slice(); // same as const team2 = [].concat(players) or 
//const team4 = [...players] in ES6 or
//const team5 = Array.from(players)
console.log(players, team2); // same
team2[3] = "Lux";
console.log(players, team2); // different
// => Copy

// const captain = person;
// console.log(captain, person); // same
// captain.number = 99;
// console.log(captain, person); // still same
// => Reference

const captain2 = Object.assign({}, person, { number: 99 }); // same as const captain3 = {...person}
console.log(captain2, person); // different
// => Copy

const wes = {
    name: "Wes",
    age: 100,
    socials: {
        twitter: "@wesbos",
        facebook: "wesbos.developer"
    }
};
const dev = Object.assign({}, wes); // if you change socials object, the wes variable will be changed too
const dev2 = JSON.parse(JSON.stringify(wes)); // it wont be like the above
