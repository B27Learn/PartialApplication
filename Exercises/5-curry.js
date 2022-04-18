"use strict";

// Check 4 digit pin.
const EXPECTED_PIN = "4967";
const checkPin = (...code) => code.join("") === EXPECTED_PIN;

// Define function curry that accepts the length of the function
// (amount of function arguments) and the function.

// const curry =
//   (length, fn) =>
//   (...args) =>
//     length > 1
//       ? curry(length - args.length, (...args2) => fn(...args, ...args2))
//       : fn(...args);

const curry = (length, fn) => arg =>
  length > 1
    ? curry(length - 1, fn.bind(null, arg))
    : fn(arg);

// const curry = (length, fn) => arg =>
//   length > 1
//     ? curry(length - 1, (arg2) => fn(arg, arg2))
//     : fn(arg);

// Allows to enter pin code by one character,
// Usage: press('3')('4')('5')('6')
const press = curry(4, checkPin);

module.exports = { press };
