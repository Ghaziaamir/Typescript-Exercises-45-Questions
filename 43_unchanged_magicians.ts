// Function to add "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        modifiedMagicians.push(`the Great ${magicians[i]}`);
    }
    return modifiedMagicians;
}

// Function to show magicians' names
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

// Original array of magician's names
let originalMagicians: string[] = ["Criss Angel", "Doug Henning", "Lance Burton", "Ricky Jay"];

// Call make_great with a copy of the original array
let greatMagicians: string[] = make_great([...originalMagicians]);

// Call the function to show magicians' names for the original array
console.log("Original Magicians:");
show_magicians(originalMagicians);

// Call the function to show magicians' names for the array with "the Great" added
console.log("\nMagicians with 'the Great' added:");
show_magicians(greatMagicians);
