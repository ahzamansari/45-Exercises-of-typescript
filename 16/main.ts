//Creating a Array
let guestlist = ["Ashad", "Babar", "Sameer", "Maaz"];
//making variable who cant come
let dontcome = guestlist[0];
//Print guest name who cant come
console.log(dontcome, "Dont come at party");
//replace with guest who cant come
guestlist.splice(0, 1, "Usman");
//message for big table
console.log("Good News ! We have found a bigger Table For Dinner.");
//Adding a value in the start of index Array
guestlist.unshift("Ali");
//Adding a value in the end of index Array
guestlist.push("Fahad");
// get a middle index of our guestlist array
let middleindex: number = (guestlist.length / 2);
//Adding a new guest at middle index of array    
guestlist.splice(middleindex, 0, "Usama");

console.log("updated list of our guest");

guestlist.forEach(oneguest => console.log(`asalamulikum ${oneguest}, would you like to dinner with me?`));