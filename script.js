const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};
const players = ["John", "Mike", "Sarah"];
const person = {
  name: "Tom",
  age: 25,
};

const team = players;
const team1 = [...players];
const cap1 = { ...person };

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
// Given array and object
var players = ['John', 'Mike', 'Sarah'];
var person = {
  name: 'Alice',
  age: 25
};

// Create variables to store references and copies
var team = players;
var team1 = players.slice();
var cap1 = Object.assign({}, person);

console.log(team);   // Output: ['John', 'Mike', 'Sarah']
console.log(team1);  // Output: ['John', 'Mike', 'Sarah']
console.log(cap1);   // Output: { name: 'Alice', age: 25 }

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
