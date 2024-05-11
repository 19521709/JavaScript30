const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

const isAdult = people.some(person => new Date().getFullYear() - person.year >= 19);
console.log(isAdult);

const allAdults = people.every(person => new Date().getFullYear() - person.year >= 19);
console.log(allAdults);

const targetComment = comments.find(comment => comment.id === 823423);
console.log(targetComment);

const targetIndex = comments.findIndex(comment => comment.id === 823423);
console.log(targetIndex);

console.table(comments);

//delete 1
//comments.splice(targetIndex, 1);
//console.table(comments);

//delete 2
const newComments = [
    ...comments.slice(0, targetIndex),
    ...comments.slice(targetIndex + 1)
];
console.table(newComments);