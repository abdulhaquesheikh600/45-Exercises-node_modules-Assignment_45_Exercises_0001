"use strict";
/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.*/
const myfriend = ["Jamshed ul Haque", "Ahmed", "Junaid ul Haque", "Ali",];
// 1st method (loop)
for (let i = 0; i < myfriend.length; i++) {
    console.log(`Mr. ${myfriend[i]}! you are invited to my dinner on Monday\n`);
}
// 2nd method
myfriend.map((ib) => {
    console.log(`Mr. ${myfriend[ib]}! you are invited to my dinner on Monday\n`);
});
