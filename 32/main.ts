//Array of current user
let current_user = ["Usman", "Ali", "Areeba", "Zain", "Osama", "AHZAM"];

//Array of of new user
let new_username = ["Ahzam", "Ashad", "Fabiha", "Sumera", "Baber"];

//loop through new_username to check usernames availbility
new_username.forEach(new_one_user => {
    
    //Making a Condition for Username Already Exist in Our condition variable
let our_condition = current_user.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    //Print Diffrent Messages using if-Else statements
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
});