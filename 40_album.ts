

// Function to create a music album object
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    // Check if tracks parameter is provided and add it to the album object
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Make three dictionaries representing different albums
let album1 = make_album("Asim Azhar", "Sadqay");
let album2 = make_album("Talha Anjum", "open Letter", 12); // Example with number of tracks provided
let album3 = make_album("Faris Shafi", "Divine");

// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
