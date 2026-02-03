const students = [
  { id: 1, name: "Mark", marks: 50 },
  { id: 2, name: "Lori", marks: 82 },
  { id: 3, name: "Kevin", marks: 65 },
  { id: 4, name: "Robert", marks: 76 },
  { id: 5, name: "Daniel", marks: 68 },
  { id: 6, name: "Barbara", marks: 94 },
];

const names = students.map((student) => {
  console.log(student.name);
});

const goodStudents = students.filter((student) => {
  return student.marks >= 80;
});
console.log(goodStudents);
