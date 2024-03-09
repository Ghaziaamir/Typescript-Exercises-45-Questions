// Function to format city and country
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with city-country pairs
let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("Istanbul", "Turkey");
let city3 = city_country("Bakoo", "Azarbaijaan");

// Print the formatted city-country strings
console.log(city1);
console.log(city2);
console.log(city3);
