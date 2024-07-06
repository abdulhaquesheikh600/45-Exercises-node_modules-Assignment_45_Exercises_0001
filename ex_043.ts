/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
with a copy of the array of magicians’ names. Because the original array will be unchanged, 
return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have 
one array of the original names and one array with the Great added to each magician’s name.*/

let magicianNames = ["Junaid","Jamshed","Ali","Abdul"];

// making a copy of an array
let magicianNamesCopy = [...magicianNames];

function show_magicians(great: string){
 let withGreetings = "";

   for(let item of magicianNamesCopy){
      withGreetings += `${great} ${item}\n`;

   }
   return withGreetings;
};
let myGreetings = show_magicians("Hello");
let makeArray = myGreetings.split(`\n`);
console.log(makeArray);
//original array
console.log(magicianNames);