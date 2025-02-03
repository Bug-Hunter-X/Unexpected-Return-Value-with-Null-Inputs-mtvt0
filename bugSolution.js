function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); //Throw error for null values
  }
  return a + b;
}

console.log(foo(5,5)); //Output: 10
try{
  console.log(foo(null, 5)); //Throws an error
}catch(e){
  console.error("Error: ", e.message)
}
try{
  console.log(foo(5, null)); //Throws an error
}catch(e){
  console.error("Error: ", e.message)
}

//Alternative solution handling null values
function foo2(a, b) {
    a = a === null ? 0 : a; // Assign 0 if a is null
    b = b === null ? 0 : b; //Assign 0 if b is null
    return a + b;
}

console.log(foo2(5, null)); //Output: 5
console.log(foo2(null, 5)); //Output: 5
console.log(foo2(null, null)); //Output: 0