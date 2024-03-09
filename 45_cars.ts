// Function to store information about a car in an object
function store_car_info(manufacturer: string, model: string, ...extras: [string, any][]): { manufacturer: string, model: string, [key: string]: any } {
    let carInfo: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    // Store additional information about the car
    extras.forEach(extra => {
        const [key, value] = extra;
        carInfo[key] = value;
    });

    return carInfo;
}

// Call the function with required information and additional name-value pairs
let carInfo = store_car_info("Honda", "City", ["color", "Grey"], ["optional feature", "sunroof"]);

// Print the object to ensure all information was stored correctly
console.log(carInfo);
