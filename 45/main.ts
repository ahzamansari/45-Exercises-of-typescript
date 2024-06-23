//Define a Function to  create a car object with optional option 
function create_car(manufacturer, model, ...options){
    //Intialize a Car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    //Add additional option to the car object
    options.forEach(option =>{
        let[key, value] = option.split(":")
        car[key.trim()] = value.trim();

    });

    return car;
}
 
//Call the function to create a car object

let my_car = create_car("BMW", "M5", "Color: RED", "sunroof: True");

//Print the variable to ensure all the info is stored correctly in the car object
console.log(my_car);