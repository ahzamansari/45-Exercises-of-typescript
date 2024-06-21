//Creattimg  an array
let username = ["Mahad", "Ali", "Zeeshan", "Admin", "Usman"];

//Using ForEach Loop an array
username.forEach(oneuser =>{
    if(oneuser === "Admin"){
        console.log(`Hello ${oneuser}, would you like to see a status report`)
    }else{
        console.log(`Hello ${oneuser}, Thank you for logging in again`)
    }
});