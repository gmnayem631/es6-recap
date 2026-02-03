const student = { name: "Barry", marks: 85, address: "Dhaka" };

// console.log(
//   `${student["name"]} got ${student["marks"]} marks in the Math exam.`,
// );

for (let key in student) {
  const values = student[key];
  console.log(student[`${key}`]);
}
