//Creating a Array
var guestlist = ["Ashad", "Babar", "Sameer", "Maaz"];
//making variable who cant come
var dontcome = guestlist[0];
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
var middleindex = (guestlist.length / 2);
//Adding a new guest at middle index of array    
guestlist.splice(middleindex, 0, "Usama");
console.log("updated list of our guest");
guestlist.forEach(function (oneguest) { return console.log("asalamulikum ".concat(oneguest, ", would you like to dinner with me?")); });
//Inform that only two guests can be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, So I can only invite two Guests to dinner with me");
//using while loop to remove guests from the array untill only two name remain
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    console.log("Sorry, ".concat(removeguest, " I cant invite you to Dinner"));
}
//sending invitation to last two guest on the list
console.log("invitation to the last 2 guest");
guestlist.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ", you are still invited to dinner")); });
//removing last two gueest
guestlist.pop();
guestlist.pop();
console.log("Empty list", guestlist);
