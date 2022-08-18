/* eslint-disable import/extensions */
/* eslint-disable no-console */

import { books } from "./data.js";

console.clear

console.log("\n~~~~~~~~~~~ 2.3.2 - Bibliothécaire ~~~~~~~~~~~~\n ");

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

const checkIfAllRented = books.every((b) => b.rented > 0);
console.log(checkIfAllRented);

console.log("Quel est livre le plus emprunté ?");

const booksSortedByRentals = books.sort((a, b) =>
  a.rented > b.rented ? -1 : 1
);
console.log(booksSortedByRentals[0].title);

console.log("Quel est le livre le moins emprunté ?");

console.log(booksSortedByRentals[booksSortedByRentals.length - 1].title);

console.log("Trouve le livre avec l'ID: 873495");

const getBookFromId = (id) => books.find((b) => b.id === id);
console.log(getBookFromId(873495).title);

console.log("Supprime le livre avec l'ID: 133712");

const newList = books.filter((b) => b.id !== 133712);
console.dir(newList);

console.log(
  "Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)"
);

const sortedBooks = newList.sort((a, b) => (a.title > b.title ? 1 : -1));
console.dir(sortedBooks);
