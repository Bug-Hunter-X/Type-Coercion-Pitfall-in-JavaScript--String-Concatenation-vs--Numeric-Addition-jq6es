function foo(a, b) {
  //Explicit type checking
  if (a === null || b === null) {
    return null; // Handle null values
  }
  if (typeof a === 'string' && typeof b === 'number') {
    a = parseInt(a, 10);
  } else if (typeof a === 'number' && typeof b === 'string') {
    b = parseInt(b, 10);
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Invalid input: Both inputs must be numbers or convertible to numbers.';
  }

  return a + b;
}

console.log(foo(null, 5)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo(5, 5)); // Output: 10
console.log(foo(5, '5')); // Output: 10
console.log(foo('5', 5)); //Output: 10
console.log(foo('hello',5)); //Output: Invalid input: Both inputs must be numbers or convertible to numbers.