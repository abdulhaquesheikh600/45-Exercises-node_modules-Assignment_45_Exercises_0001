"use strict";
/*Name Cases: Store a person’s name in a variable, and then print
that person’s name in lowercase, uppercase, and titlecase.*/
const personName = "illahibux";
//lowercase
console.log(personName.toLowerCase());
//upercase
console.log(personName.toUpperCase());
//titlecase
let firstLetter = personName.charAt(0).toUpperCase();
let restLetters = personName.slice(0).toLowerCase();
let titleCase = firstLetter + restLetters;
console.log(titleCase);
