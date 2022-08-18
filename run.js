/* eslint-disable import/extensions */
/* eslint-disable no-alert */
/* eslint-disable no-console */

import { hoarders, books } from "./data.js";

console.clear

console.log("########################################################");
console.log("############# 2.1 - Hello World  #######################");
console.log("########################################################");

console.log("\n~~~~~~~~~~~ 2.1.1 - Bonjour ~~~~~~~~~~~~~~~~~~~\n ");

console.log("Hello world");

console.log("\n~~~~~~~~~~~ 2.1.2 - Salut ~~~~~~~~~~~~~~~~~~~~~\n ");

const sayHello = `Hello, ${prompt("What is your name?")}!\n\n `;
console.log(sayHello);

console.log("########################################################");
console.log("############# 2.2 - Opérations & boucles ###############");
console.log("########################################################");

console.log("\n~~~~~~~~~~~ 2.2.1 - Calculs rapides ~~~~~~~~~~~\n ");

const factorial = (num) => (num === 0 || num === "" ? 1 : num * factorial(num - 1));

console.log(factorial(prompt("Enter a number to factorialise:")));

console.log("\n~~~~~~~~~~~ 2.2.2 - Pyramide de Mario ~~~~~~~~~\n ");

const pyramid = (floors = prompt("How many floors would you like?")) => {
  for (let i = 1; i <= floors; i += 1) {
    console.log(" ".repeat(floors - i) + "#".repeat(i));
  }
};

pyramid();

console.log("\n\n########################################################");
console.log("############# 2.3 - Analyse de données #################");
console.log("########################################################");

console.log("\n~~~~~~~~~~~ 2.3.1 - sTaRtUp NaTiOn ~~~~~~~~~~~~\n ");

console.log(
  "\nFiltre dans cette liste les entrepreneurs qui sont nés dans les années 70:\n "
);

const genXers = hoarders.filter((h) => h.year >= 1970 || h.year < 1980);
genXers.forEach((h) => console.log(`${h.first} ${h.last}: ${h.year}`));

console.log(
  "\n\nSors une array qui contient le prénom et le nom des entrepreneurs\n "
);

const fullNames = hoarders.map((h) => `${h.first} ${h.last}`);
console.dir(fullNames);

console.log("\n\nQuel âge aurait chaque inventeur aujourd'hui ?\n ");

const hoardersWithAge = hoarders.map(
  (h) => `${h.first} ${h.last}: ${new Date().getFullYear() - h.year} years old.`
);
console.dir(hoardersWithAge);

console.log("\n\nTrie les entrepreneurs par ordre alphabétique du nom de famille.\n ");

const sortedHoarders = hoarders.sort((a, b) => (a.last > b.last ? 1 : -1));
sortedHoarders.forEach((h) => console.log(`${h.first} ${h.last}`));

console.log("\n~~~~~~~~~~~ 2.3.2 - Bibliothécaire ~~~~~~~~~~~~\n ");

console.log("\n\nEst-ce que tous les livres ont été au moins empruntés une fois ?\n ");

const checkIfAllRented = books.every((b) => b.rented > 0);
console.log(checkIfAllRented);

console.log("\n\nQuel est livre le plus emprunté ?\n ");

const booksSortedByRentals = books.sort((a, b) =>
  a.rented > b.rented ? -1 : 1
);
console.log(booksSortedByRentals[0].title);

console.log("\n\nQuel est le livre le moins emprunté ?\n ");

console.log(booksSortedByRentals[booksSortedByRentals.length - 1].title);

console.log("\n\nTrouve le livre avec l'ID: 873495\n");

const getBookFromId = (id) => books.find((b) => b.id === id);
console.log(getBookFromId(873495).title);

console.log("\n\nSupprime le livre avec l'ID: 133712\n");

const newList = books.filter((b) => b.id !== 133712);
console.dir(newList);

console.log(
  "\n\nTrie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)\n"
);

const sortedBooks = newList.sort((a, b) => (a.title > b.title ? 1 : -1));
console.dir(sortedBooks);

console.log("########################################################");
console.log("############# 2.4 - Creusons-nous la tête ##############");
console.log("########################################################");

console.log("\n~~~~~~~~~~~ 2.4.1 - Code la vie ~~~~~~~~~~~~~~~\n ");

const proteinDecoder = (rna) => {
  const codons = [];
  for (let i = 1; i <= rna.length; i += 1) {
    if (i % 3 === 0) codons.push(rna.substring(i - 3, i));
  }
  console.log(`\n\n${rna}\n `);
  codons.forEach((codon) => {
    console.log(codon);
    switch (codon) {
      case "UCU":
      case "UCC":
      case "UCA":
      case "UCG":
      case "AGU":
      case "AGC":
        console.log("Serine\n ");
        break;
      case "CCU":
      case "CCC":
      case "CCA":
      case "CCG":
        console.log("Proline\n ");
        break;
      case "UUA":
      case "UUG":
        console.log("Leucine\n ");
        break;
      case "UUU":
      case "UUC":
        console.log("Phenylalanine\n ");
        break;
      case "CGU":
      case "CGC":
      case "CGA":
      case "CGG":
      case "AGA":
      case "AGG":
        console.log("Arginine\n ");
        break;
      case "UAU":
      case "UAC":
        console.log("Tyrosine\n ");
        break;
      default:
        console.log("Failed to identify Protein\n ");
    }
  });
};

proteinDecoder("CCGUCGUUGCGCUACAGC");

proteinDecoder("CCUCGCCGGUACUUCUCG");

console.log("\n~~~~~~~~~~~ 2.4.2 - Acné-Bot ~~~~~~~~~~~~~~~~~~\n ");

const acneBot = (str) => {
  while (true) {

    str = prompt("'sup now?\n ")

    const length = str ? str.length : 0;
    const words = str ? str.toLowerCase().split(" ") : null;

    if (str === "quit") {
      console.log("Wait, you can't... That's illegal fam!");
      break;
    }

    else if (str && str[length - 1] === "?") console.log("Sure...");

    else if (str && str.toUpperCase() === str) console.log("Woah, chill out!");

    else if (words && words.includes("fortnite")) console.log("What's your Epic id brah?\n ");

    else if (length === 0) console.log("Need me to call 911?\n ");

    else console.log("Whatever...");

  }

}

acneBot();
