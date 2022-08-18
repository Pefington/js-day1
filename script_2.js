/* eslint-disable no-alert */
/* eslint-disable no-console */

console.clear

console.log("\n~~~~~~~~~~~ 2.2.1 - Calculs rapides ~~~~~~~~~~~\n ");

const factorial = (num) => (num === 0 || num === "" ? 1 : num * factorial(num - 1));

console.log(factorial(prompt("Enter a number to factorialise:")));
