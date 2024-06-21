//Array of current user
var current_user = ["Usman", "Ali", "Areeba", "Zain", "Osama", "AHZAM"];
//Array of of new user
var new_username = ["Ahzam", "Ashad", "Fabiha", "Sumera", "Baber"];
//loop through new_username to check usernames availbility
new_username.forEach(function (new_one_user) {
    //Making a Condition for Username Already Exist in Our condition variable
    var our_condition = current_user.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //Print Diffrent Messages using if-Else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
