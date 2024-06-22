//Making a Function
function make_shirt(size, printmessage) {
    if (size === void 0) { size = "Large"; }
    if (printmessage === void 0) { printmessage = "I love typescript"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printmessage, " print on Shirt"));
}
//Calling a function with by default values
make_shirt();
//calling a function now with medium size and default message
make_shirt("Medium");
//caling a function now small size and differet print message
make_shirt("Small", "I Love Javascript");
