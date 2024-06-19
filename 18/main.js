var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Having a Array of countries and print its original Order
var countriestovisit = ["China", "Brazil", "Argentina", "Swizerland"];
console.log(" Orginal Order:", countriestovisit);
// Print the Array in Alphabetical order
console.log("Aplhabetical order:", __spreadArray([], countriestovisit, true).sort());
//Show that the Array is still in  its original order
console.log("still in Original Order:", countriestovisit);
//Print the Array in reversed Order without modifying the Actual Array list
console.log("Reverse Order:", __spreadArray([], countriestovisit, true).reverse());
//Show that the Array is still in  its original order
console.log("still in Original Order:", countriestovisit);
//We have Changed the Original Array Order now
console.log("Original Array Reversed:", countriestovisit.reverse());
//print the array to Show that its back to its original order
console.log("Back to Original Order:", countriestovisit.reverse());
//Print the array to show that its has been changed in Alphabetical order now
console.log("sorted in alphabetical order:", countriestovisit.sort());
//print the array to Show that its back to its original order in reverse order again
console.log("Back to Original Order:", countriestovisit.reverse());
