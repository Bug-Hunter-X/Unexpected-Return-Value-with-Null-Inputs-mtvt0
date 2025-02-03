function foo(a, b) {
  if (a === null || b === null) {
    return 0; //Incorrect return value
  }
  return a + b;
}

console.log(foo(null, 5)); //Output: 0, but should throw an error or handle null values appropriately
console.log(foo(5, null)); //Output: 0, but should throw an error or handle null values appropriately