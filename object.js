// const employee = {
//   name: "Daymond",
//   gender: "Male",
//   age: 45,
//   salary: 50000,
//   experience: 5,
// };

// Object.seal(employee);

// const { name, gender, age, salary, experience } = employee;

// delete employee.salary;

// employee.location = "Dhaka";

// employee.salary += 2000;

// console.log(employee);

// const a = { x: 1 };
// const b = { y: 2 };

// console.log(a);

// const scores = { math: 80, english: 70 };

// for (let score in scores) {
//   console.log(``);
// }

const person = { name: "Sara" };

const { name } = person;
const userName = name;

console.log(userName);
