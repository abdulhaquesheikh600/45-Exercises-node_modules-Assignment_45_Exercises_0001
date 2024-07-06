/*More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program 
informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/






// Define the initial list of friends
const myFriend = ["Jamshed ul Haque", "Ahmed", "Junaid ul Haque", "Ali"];

// Print the initial list of friends
console.log(myFriend);

// Inform about inviting more friends
console.log("We have 3 more friends to invite to dinner\n");

// Add a friend at the beginning of the list
myFriend.unshift("Jamshed ul Haque");
["Jamshed ul Haque", "Jamshed ul Haque", "Ahmed", "Junaid ul Haque", "Ali"]
console.log(myFriend);

// Add a friend in the middle of the list
myFriend.splice(2, 0, "Mubarsher");
console.log(myFriend);

// Add a friend at the end of the list
myFriend.push("Abdul Haque");
console.log(myFriend);

// Print all friends along with a message
for (let i = 0; i < myFriend.length; i++) {
    console.log(`Mr. ${myFriend[i]}, you are invited to my dinner`);
}
