// Function to summarize the sandwich being ordered
function order_sandwich(...items: string[]): void {
    console.log("You ordered a sandwich with the following items:");
    items.forEach(item => console.log(`- ${item}`));
}

// Call the function with different number of arguments to order sandwiches
order_sandwich("Fillet", "Cheese", "Lettuce");
order_sandwich("Patty", "Pickels");
order_sandwich("Iceberg", "Sauces", "Chicken Piece");
