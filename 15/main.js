var guestlist = ["Ashad", "Babar", "Sameer", "Maaz"];
var dontcome = guestlist[2];
console.log(dontcome, "dont come at party");
guestlist.splice(2, 1, "Saad");
guestlist.forEach(function (guest) { return console.log("Asalamulikum ".concat(guest, ", Would you like to dinner with me?")); });
