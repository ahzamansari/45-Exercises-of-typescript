// Creating a Array
let numbers = [1, 2 ,3, 4, 5, 6, 7, 8, 9];

//using for-loop
for( let onenumber of numbers){
    let originalending: string;

    if(onenumber === 1){
        originalending = "st"
    }
    else if(onenumber === 2){
        originalending = "nd"
    }
    else if(onenumber === 3){
        originalending = "rd"
    }
    else{
        originalending = "th"
    }

    console.log(`${onenumber}${originalending}`);
}