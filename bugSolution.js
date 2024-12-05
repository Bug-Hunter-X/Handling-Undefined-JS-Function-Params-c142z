function foo(a, b) {
  // Handle null and undefined values
  a = (a === null || a === undefined) ? 0 : a; 
  b = (b === null || b === undefined) ? 0 : b; 
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, 2)); // Output: 2
console.log(foo(1, undefined)); // Output: 1
console.log(foo(undefined, undefined)); // Output: 0