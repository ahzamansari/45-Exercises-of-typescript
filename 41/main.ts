//Define a function to print each magician from an array

function show_magician(magician: string[]){
    magician.forEach(name => console.log(name));
}

//Define an array countaniing magician name
let magician_name = ["sankey magics", "Ahzam", "Spidey Magician"];

//call the function to print each magician name
show_magician(magician_name);