# JavaScript Type Coercion Bug

This repository demonstrates a common error in JavaScript related to type coercion during arithmetic operations.  The `bug.js` file contains code that unintentionally performs string concatenation instead of numeric addition. The `bugSolution.js` file presents a corrected version of the code that uses proper type checking and handling to prevent this issue.  This highlights the importance of strict type checking in JavaScript to avoid unexpected behavior and ensure the reliability of your code.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js` in your terminal. Observe the unexpected output.
4. Run `node bugSolution.js` to see the corrected output.

## Solution

The solution involves explicitly checking the types of the operands before performing the addition. If either operand is a string, the code converts it to a number using `parseInt()` or `parseFloat()`, handling potential errors. If type conversion fails, it returns an appropriate error message or a default value.