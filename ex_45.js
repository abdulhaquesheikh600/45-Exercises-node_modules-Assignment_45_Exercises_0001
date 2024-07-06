"use strict";
/*Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs,
such as a color or an optional feature. Print the Object that’s returned to
make sure all the information was stored correctly.*/
function carDetails(manufacturer, modelName, ...additionalInfo) {
    const car = Object.assign({ manufacturer, modelName }, Object.fromEntries(additionalInfo));
    return car;
}
const myCarDetails = carDetails("Toyota", "Corolla", ["color", "blue"], ["year", 2024]);
console.log(myCarDetails);
// Output: { manufacturer: 'Toyota', modelName: 'Corolla', color: 'blue', year: 2024 }
// Correct function syntax~
function myfun(size, label) {
    console.log(`Size: ${size}, Label: ${label}`);
}
myfun(10, "example");
// Output: Size: 10, Label: example
// Alternative arrow function syntax
const myArrowFun = (size, label) => {
    console.log(`Size: ${size}, Label: ${label}`);
};
myArrowFun(20, "example2");
// Output: Size: 20, Label: example2
