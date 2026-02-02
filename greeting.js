// Write a function that: Destructures name and city

// Uses default value for city

const user = { name: "Nayem", age: 22, city: "Dhaka" };

const greetings = ({ name, city = "Unknown" }) => {
  console.log(`Hello ${name} from ${city}`);
};

// greetings(user);

const welcome = (guest = "Guest") => {
  console.log(`Welcome ${guest}`);
};
welcome();
