"use strict";
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
let myPleaces = ["Karachi", "UK", "lahore", "Multan", "Hyderabad", "Quetta", "SK"];
console.log(myPleaces);
//making a copy of an array
let copyofArry = myPleaces.slice();
let sortedArry = copyofArry.sort();
console.log(sortedArry);
//printing original array
console.log(myPleaces);
//reverse the order of original array
let reverseOrlArray2 = myPleaces.reverse();
console.log(reverseOrlArray2);
let aginReverse = reverseOrlArray2.reverse();
console.log(aginReverse); //same as original array
//same as original array
let sortOrArray = myPleaces.sort();
