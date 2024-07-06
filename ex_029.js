"use strict";
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
let favoritefruits = ["Apple", "Banana", "Orange"];
if (favoritefruits.includes("Mango")) {
    console.log(`I would like to eat Mango`);
}
else if (favoritefruits.includes("Apple")) {
    console.log(`I would like to eat Apple`);
}
else {
    console.log(`fruits are not available!`);
}
