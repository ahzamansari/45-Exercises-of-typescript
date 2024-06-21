let username = ["Mahad", "Ali", "zeeshan", "Admin", "Usman"];

username = [];

if(username.length === 0){
    console.log("Your Array in Empty We need to find some users!")
}
else{
    //Using ForEach Loop an array
username.forEach(oneuser =>{
    if(oneuser === "Admin"){
        console.log(`Hello ${oneuser}, would you like to see a status report`)
    }else{
        console.log(`Hello ${oneuser}, Thank you for logging in again`)
    }
});
}