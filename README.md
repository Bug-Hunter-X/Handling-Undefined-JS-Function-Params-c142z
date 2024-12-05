# Unhandled Undefined Values in JavaScript Function

This repository demonstrates a common JavaScript bug involving the handling of undefined values in a function. The `foo` function handles null values gracefully but fails to explicitly account for undefined values.

## Bug Description
The `foo` function correctly handles null input values by returning null. However, if either `a` or `b` is undefined, the addition operation will lead to `NaN` (Not a Number), which is not explicitly handled.  This could lead to unexpected behavior in applications that rely on the function's output.

## Solution
The improved `foo` function in `bugSolution.js` explicitly checks for both `null` and `undefined` values, providing a more robust solution.  If either input is null or undefined, it returns a default value (0 in this case).  This prevents unexpected `NaN` results.