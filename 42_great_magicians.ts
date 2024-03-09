// Function to add "the Great" to each magician's name
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

// Function to show magicians' names
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

let magicians: string[] = ["Criss Angel", "Doug Henning", "Lance Burton", "Ricky Jay"];

make_great(magicians);

// Call the function to show magicians' names
show_magicians(magicians);