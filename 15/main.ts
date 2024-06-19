let guestlist = ["Ashad", "Babar", "Sameer", "Maaz"];

let dontcome = guestlist[2];

console.log(dontcome, "dont come at party");

guestlist.splice(2, 1, "Saad");

guestlist.forEach(guest => console.log(`Asalamulikum ${guest}, Would you like to dinner with me?`));