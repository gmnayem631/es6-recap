const people = [
  { id: 1, name: "Rana" },
  { id: 2, name: "Sadia" },
  { id: 3, name: "Imran" },
];

const onePerson = people.find((person) => person.id === 2);
console.log(onePerson);
