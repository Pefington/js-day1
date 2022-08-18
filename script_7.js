/* eslint-disable no-alert */
/* eslint-disable no-console */

console.clear

console.log("\n~~~~~~~~~~~ 2.4.2 - Acné-Bot ~~~~~~~~~~~~~~~~~~\n ");

const acneBot = (str) => {
  while (true) {

    str = prompt("'sup now?\n ")

    const length = str ? str.length : 0;
    const words = str ? str.toLowerCase().split(" ") : null;

    if (str === "quit") {
      console.log("Wait, you can't... That's illegal fam!");
    }

    else if (str && str[length - 1] === "?") console.log("Sure...");

    else if (str && str.toUpperCase() === str) console.log("Woah, chill out!");

    else if (words && words.includes("fortnite")) console.log("What's your Epic id brah?\n ");

    else if (length === 0) console.log("Need me to call 911?\n ");

    else console.log("Whatever...");

  }

}

acneBot();
