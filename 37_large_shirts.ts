// Function to make a shirt
function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`You've ordered a ${size} shirt with the message: "${message}".`);
}

// Call the function to make a large shirt with the default message
make_shirt();

// Call the function to make a medium shirt with the default message
make_shirt("medium");

// Call the function to make a small shirt with a different message
make_shirt("small", "Just Do It!");
