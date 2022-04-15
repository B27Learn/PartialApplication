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

{
  const f1 = press("1");
  if (typeof f1 !== "function") {
    throw new Error(`Expected press('1') to be a function.`);
  }
}
{
  const f2 = press("1")("2");
  if (typeof f2 !== "function") {
    throw new Error(`Expected press('1')('2') to be a function.`);
  }
}
{
  const f3 = press("1")("2")("3");
  if (typeof f3 !== "function") {
    throw new Error(`Expected press('1')('2')('3') to be a function.`);
  }
}
{
  const e4 = press("1")("2")("3")("4");
  if (typeof e4 !== "boolean") {
    throw new Error(`Expected press('1')('2')('3')('4') to be a boolean.`);
  }
}
{
  const res = press("1")("2")("3")("4");
  if (res) {
    throw new Error(`Expected false when entered wrong pin code.`);
  }
}
{
  const res = press("4")("9")("6")("7");
  if (!res) {
    throw new Error(`Expected true when entered correct pin code.`);
  }
}

module.exports = { press };
