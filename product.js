const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 50 },
];

products.forEach((product) => {
  console.log(`Product: ${product.name} costs ${product.price}
`);
});
