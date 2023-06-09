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

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
