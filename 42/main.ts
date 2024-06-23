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

//Call show_magician that show mdified list of magician names
show_magician(great_magician);