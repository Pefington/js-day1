/* eslint-disable no-console */

console.clear

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
