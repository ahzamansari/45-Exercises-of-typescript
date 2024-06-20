var apple = "apple";
var uppercaseapple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "mango"];
//Test for equality and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");
//Test using lower case functions
console.log("\nIs APPLE is equal to apple after converting to lower case");
console.log(uppercaseapple.toLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after converting to lower case");
console.log(uppercaseapple.toLowerCase() != "apple");
//Numerical tests
//Equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
//not equal to
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);
//Greater then
console.log("\n Is ten is greater then to Zero?");
console.log(ten > 0);
//less then
console.log("\n Is twenty is greater then to 10?");
console.log(twenty < 10);
//Greater then or equal to
console.log("\n Is ten is greater then or equal to 5?");
console.log(ten >= 5);
//less then or equal to
console.log("\n Is twenty is less then or equal to 10?");
console.log(twenty <= 10);
//Test using "and" & "or" operator
//using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater then 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater then 30");
console.log(twenty != 10 && twenty > 30);
//using || (Or)
console.log("\n20 is greater then 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n20 is greater then 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
//test whether an item is included in array
console.log("\nis mango include in my fruits array");
console.log(fruits.includes("mango"));
//its not include
console.log("\nis mango is not include in my fruits array");
console.log(!fruits.includes("mango"));
