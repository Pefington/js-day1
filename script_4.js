/* eslint-disable import/extensions */
/* eslint-disable no-console */

import { hoarders } from "./data.js";

console.clear

console.log("\n~~~~~~~~~~~ 2.3.1 - sTaRtUp NaTiOn ~~~~~~~~~~~~\n ");

console.log(
  "Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70:\n "
);

const genXers = hoarders.filter((h) => h.year >= 1970 || h.year < 1980);
genXers.forEach((h) => console.log(`${h.first} ${h.last}: ${h.year}`));

console.log(
  "Sors une array qui contient le prénom et le nom des entrepreneurs"
);

const fullNames = hoarders.map((h) => `${h.first} ${h.last}`);
console.dir(fullNames);

console.log("Quel âge aurait chaque inventeur aujourd'hui ?");

const hoardersWithAge = hoarders.map(
  (h) => `${h.first} ${h.last}: ${new Date().getFullYear() - h.year} years old.`
);
console.dir(hoardersWithAge);

console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.");

const sortedHoarders = hoarders.sort((a, b) => (a.last > b.last ? 1 : -1));
sortedHoarders.forEach((h) => console.log(`${h.first} ${h.last}`));
