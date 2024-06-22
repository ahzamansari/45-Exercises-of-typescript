//Making a Function

function make_shirt(size: string = "Large", printmessage: string = "I love typescript"){
    console.log(`Creating a ${size} shirt with the ${printmessage} print on Shirt`);
}

//Calling a function with by default values
make_shirt();

//calling a function now with medium size and default message
make_shirt("Medium");

//caling a function now small size and differet print message
make_shirt("Small", "I Love Javascript");