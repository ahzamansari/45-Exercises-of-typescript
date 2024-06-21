//Creattimg  an array
var username = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];
//Using ForEach Loop an array
username.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ", would you like to see a status report"));
    }
    else {
        console.log("Hello ".concat(oneuser, ", Thank you for logging in again"));
    }
});
