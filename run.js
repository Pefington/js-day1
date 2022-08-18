/* eslint-disable import/extensions */
/* eslint-disable no-alert */
/* eslint-disable no-console */

import { hoarders, books } from "./data.js";

console.log("########################################################");
console.log("############# 2.1 - Hello World  #######################");
console.log("########################################################");

console.log("\n");
console.log("############# 2.1.1 - Bonjour ##########################");
console.log("\n");

console.log("Hello world");

console.log("\n");
console.log("############# 2.1.2 - Salut ############################");
console.log("\n");

const sayHello = `Hello, ${prompt("What is your name?")}!`;
console.log(sayHello);

console.log("\n");
console.log("########################################################");
console.log("############# 2.2 - Opérations & boucles ###############");
console.log("########################################################");

console.log("\n");
console.log("############# 2.2.1 - Calculs rapides ##################");
console.log("\n");

const factorial = (num) => (num === 0 ? 1 : num * factorial(num - 1));

console.log(factorial(prompt("Enter a number to factorialise:")));

console.log("\n");
console.log("############# 2.2.2 - Pyramide de Mario#################");
console.log("\n");

const pyramid = (floors = prompt("How many floors would you like?")) => {
  for (let i = 1; i <= floors; i += 1) {
    console.log(" ".repeat(floors - i) + "#".repeat(i));
  }
};

pyramid();

console.log("\n");
console.log("########################################################");
console.log("############# 2.3 - Analyse de données #################");
console.log("########################################################");

console.log("\n");
console.log("############# 2.3.1 - sTaRtUp NaTiOn ###################");
console.log("\n");

console.log(
  "Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70:"
);

const genXers = hoarders.filter((h) => h.year >= 1970 || h.year < 1980);
console.log("\n");
genXers.forEach((h) => console.log(`${h.first} ${h.last}: ${h.year}`));
console.log("\n");

console.log(
  "Sors une array qui contient le prénom et le nom des entrepreneurs"
);
console.log("\n");

const fullNames = hoarders.map((h) => `${h.first} ${h.last}`);
console.dir(fullNames);
console.log("\n");

console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
console.log("\n");

const hoardersWithAge = hoarders.map(
  (h) => `${h.first} ${h.last}: ${new Date().getFullYear() - h.year} years old.`
);
console.dir(hoardersWithAge);
console.log("\n");

console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.");
console.log("\n");

const sortedHoarders = hoarders.sort((a, b) => (a.last > b.last ? 1 : -1));
sortedHoarders.forEach((h) => console.log(`${h.first} ${h.last}`));
console.log("\n");

console.log("\n");
console.log("############# 2.3.2 - Bibliothécaire ###################");
console.log("\n");

const checkIfAllRented = books.every((b) => b.rented > 0);
console.log;
