//creating an array
var pizza = ["chicken Tikka", "Malai Cheese", "Fajita"];
//using For-Loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onepizza = pizza_1[_i];
    console.log("I like ".concat(onepizza, " Pizza"));
}
//Print a Message outside of the for-loop
console.log("Pizza is Love");
console.log("I eat Pizza");
