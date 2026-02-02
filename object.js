const employee = {
  name: "Daymond",
  gender: "Male",
  age: 45,
  salary: 50000,
  experience: 5,
};

Object.seal(employee);

const { name, gender, age, salary, experience } = employee;

delete employee.salary;

employee.location = "Dhaka";

employee.salary += 2000;

console.log(employee);
