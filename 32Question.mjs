// 32. Array Questions
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Find the country containing the hightest number of characters in the countries array
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Extract all the countries containing only four characters from the countries array and print it as array
//     - Extract all the countries containing two or more words from the countries array and print it as array
//     - Reverse the countries array and capitalize each country and stored it as an array

import { country } from "./24Question/countries.mjs";

// Extract all the countries contain the word 'land' from the countries array and print it as array

let arrLand = [];

country.forEach((e) => {
  if (e.includes("land")) {
    arrLand.push(e);
  }
});

console.log(`Countries having 'land' in it are : ${arrLand}\n`);

// Find the country containing the highest number of characters in the countries array

let h = 0;
let hIndex;

country.forEach((e) => {
  if (e.length > h) {
    hIndex = countryList.indexOf(e);
    h = e.length;
  }
});

console.log(
  `The country containing the highest number of characters in the countries array is : ${country[hIndex]}\n`
);

// Extract all the countries containing only four characters from the countries array and print it as array

let c4 = [];

country.forEach((e) => {
  if (e.length == 4) {
    c4.push(e);
  }
});

console.log(
  `Countries containing only four characters from the countries array are : ${c4}\n`
);

// Extract all the countries containing two or more words from the countries array and print it as array

let cWords = [];

country.forEach((e) => {
  if (e.includes(" ")) {
    cWords.push(e);
  }
});

console.log(
  `Countries containing two or more words from the countries array are : ${cWords}\n`
);

// Reverse the countries array and capitalize each country and stored it as an array

country.reverse();

let capsArr = [];

country.forEach((e) => {
  capsArr.push(e.toUpperCase());
});

console.log(`Capitalized all countries : ${capsArr}`);
