class Animal {
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }

  showAge() {
    console.log(`This animal is ${this.age} years old`);
  }
  showThis() {
    console.log(this);
  }
}

const animal1 = new Animal("Cruger", "German Shepherd", 3);
animal1.showAge();
animal1.showThis();
