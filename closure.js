function counter() {
  let count = 0;

  return function innerFunction() {
    console.log("Inner function");
  };
}

console.log(counter()());
