//Define the function to show the magician name
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//Function to make magician great through .map() it will modify array
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magician name
var magician_name = ["Sankey magic", "Ahzam", "Spidey magician"];
//Call make_great function to modify magician names
var great_magician = make_great(magician_name);
//Making a Copy of Original array through .slice function to make a Copy
var Copy_magician_name = magician_name.slice();
//Modify the copied array to include "The Great" with thier name
var copy_great_magician = make_great(Copy_magician_name);
//Show both arrays Original and Copy
//ORIGINAL
console.log("Original Array\n");
show_magician(magician_name);
//COPIED
console.log("\nCopied Array\n");
show_magician(copy_great_magician);
