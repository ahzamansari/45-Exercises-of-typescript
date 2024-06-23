//Define a function with rest parameter that accept item arguement representing our sandwich
function makesandwich(...items: string[]){
    console.log("\n Making a sandwich with the following item: \n");
    items.forEach(singleitem => console.log(singleitem));
    console.log("\nNow enjoy sandwich");
}

//Call the function 3 items with 3 diffrent number of arguments
makesandwich("Chicken", "Cheese", "Mayo", "Egg");

makesandwich("Bread", "Butter");

makesandwich("Chicken", "Cheese", "Mayo", "Egg", "Bread", "Butter", "lettuce", "Tomato");