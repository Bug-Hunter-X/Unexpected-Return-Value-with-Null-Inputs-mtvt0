# Unexpected Return Value with Null Inputs

This repository demonstrates an uncommon JavaScript bug involving unexpected return values when null values are passed as function arguments.

## Bug Description

The `foo` function is intended to add two numbers.  However, it incorrectly handles null inputs, returning 0 instead of throwing an error or handling the null values appropriately.

## Bug Reproduction

1. Clone this repository.
2. Navigate to the `bug` folder.
3. Run the file `bug.js` using node or a browser's JavaScript console.  Observe the unexpected output.

## Solution

The provided `bugSolution.js` offers a corrected version of the `foo` function. This corrected version either throws an error or explicitly handles null inputs providing a more robust and predictable behaviour.
