/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.*/





let magicianNames = ["Junaid","Jamshed","Ali","Abdul"];

function show_magicians(){
   for(let item of magicianNames){
      console.log(item);
   }
};

show_magicians();     // calling of function
show_magicians();     // 2nd tine calling the function
