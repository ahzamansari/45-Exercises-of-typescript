//Define the function to show the magician name
function show_magician(magician: string[]){
    magician.forEach(name => console.log(name));
}

//Function to make magician great through .map() it will modify array
function make_great(magician: string[]){
    return magician.map(name => `The Great ${name}`)
}

//Define an array of magician name
let magician_name = ["Sankey magic", "Ahzam", "Spidey magician"];

//Call make_great function to modify magician names
let great_magician = make_great(magician_name);

//Making a Copy of Original array through .slice function to make a Copy
let Copy_magician_name = magician_name.slice()

//Modify the copied array to include "The Great" with thier name
let copy_great_magician = make_great(Copy_magician_name);

//Show both arrays Original and Copy

//ORIGINAL
console.log("Original Array\n");
show_magician(magician_name);

//COPIED
console.log("\nCopied Array\n");
show_magician(copy_great_magician);