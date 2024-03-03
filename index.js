// EXAMPLE 1 - Remove the Trailing Zeros from a Number in JavaScript

// ✅ remove trailing zeros from a number
const num1 = 13.453;

const result1 = parseFloat(num1);
console.log(result1); // 👉️ 13.453

// ---------------------------

// ✅ parse a string to a number and remove trailing zeros

const str1 = '13.453000';
const result2 = parseFloat(str1);
console.log(result2); // 👉️ 13.453

// ------------------------------------------------------------------

// // EXAMPLE 2 - Removing the trailing zeros from a number and format to N decimals

// const num1 = 13.4534567;

// const result1 = num1.toFixed(3);
// console.log(result1); // 👉️ "13.453"

// // ---------------------------

// const str1 = '13.4534567000';
// const result2 = parseFloat(str1).toFixed(3);
// console.log(result2); // 👉️ "13.453"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Creating a reusable function

// function removeTrailingZeros(num, decimals) {
//   const number = parseFloat(num);

//   return parseFloat(number.toFixed(decimals));
// }
// console.log(removeTrailingZeros(4.0000123, 2)); // 👉️ 4
// console.log(removeTrailingZeros(4.3, 2)); // 👉️ 4.3
// console.log(removeTrailingZeros('4.3000000', 2)); // 👉️ 4.3
// console.log(removeTrailingZeros('4.0000123', 2)); // 👉️ 4
// console.log(removeTrailingZeros('4.56780000', 3)); // 👉️ 4.568

// ------------------------------------------------------------------

// // EXAMPLE 4 - Remove the Trailing Zeros from a Number by multiplying by 1

// function removeTrailingZeros(num) {
//   const number = parseFloat(num);

//   return number * 1;
// }
// console.log(removeTrailingZeros(4.3, 2)); // 👉️ 4.3
// console.log(removeTrailingZeros(4.0000123, 2)); // 👉️ 4.0000123
// console.log(removeTrailingZeros('4.3000000', 2)); // 👉️ 4.3
// console.log(removeTrailingZeros('4.0000123', 2)); // 👉️ 4.0000123
// console.log(removeTrailingZeros('4.56780000', 3)); // 👉️ 4.5678

// ------------------------------------------------------------------

// // EXAMPLE 5 - Remove the Trailing Zeros from a Number by converting it to a String

// const num = 13.45;

// const str = num.toString();
// console.log(str); // 👉️ 13.45

// ------------------------------------------------------------------

// // EXAMPLE 6 - Remove the Trailing Zeros from a Number by using replace()

// function removeTrailingZeros(num) {
//   const number = String(num).replace(/\.0+$/, '');

//   return parseFloat(number);
// }

// console.log(removeTrailingZeros(12.45)); // 👉️ 12.45
// console.log(removeTrailingZeros(12.001)); // 👉️ 12.001
// console.log(removeTrailingZeros(12.001001)); // 👉️ 12.001001
