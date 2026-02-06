// const students = [
//   { id: 1, name: "Arafat", age: 20 },
//   { id: 2, name: "Nila", age: 22 },
//   { id: 3, name: "Rafi", age: 19 },
// ];

// students.map((student) => {
//   console.log(student.name);
// });

const users = [
  { name: "Samir", age: 16 },
  { name: "Tania", age: 18 },
  { name: "Fahim", age: 25 },
  { name: "Mitu", age: 15 },
];

const adults = users.filter((user) => user.age >= 18);
console.log(adults);
