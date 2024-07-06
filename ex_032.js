"use strict";
/*Checking Usernames: Do the following to create a program that simulates
how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users.
Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used.
If it has, print a message that the person will need to enter a new username.
If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
let current_users = ["Ali", "madaD", "Ayaz", "Fayaz", "Hussain", "Tariq", "Yasir"];
let new_users = ["Ahmed", "Manzoor", "Madad", "ayaz"];
// we will use forEach method
new_users.forEach(new_user => {
    let new_userslower = new_user.toLowerCase();
    //we will use some() method
    let userNamesTake = current_users.some(current_users => current_users.toLowerCase() === new_userslower); // true or false
    // now we will apply condition
    if (userNamesTake) {
        console.log(`${new_user} needs to choose a new username because it's alreadly taken `);
    }
    else {
        console.log(`${new_user} is the new member added`);
        current_users.push(new_user); // add new user to current users array;
    }
});
console.log(current_users);
