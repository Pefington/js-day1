/* eslint-disable no-alert */
/* eslint-disable no-console */

console.clear

console.log("\n~~~~~~~~~~~ 2.2.2 - Pyramide de Mario ~~~~~~~~~\n ");

const pyramid = (floors = prompt("How many floors would you like?")) => {
  for (let i = 1; i <= floors; i += 1) {
    console.log(" ".repeat(floors - i) + "#".repeat(i));
  }
};
