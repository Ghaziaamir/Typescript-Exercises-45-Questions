

const current_users :string[] = ['abdulmoiz123', 'usman420', 'bugger098', 'dudee934', 'doodle567'];

const new_users :string[] = ['bugger098', 'cement88', 'dudee934', 'people87', 'bashed67'];

// Function to check if a username is available
function isUsernameAvailable(username: string): boolean {
    
    let lowerCaseCurrentUsers = current_users.map(user => user.toLowerCase());
    return !lowerCaseCurrentUsers.includes(username.toLowerCase());
}


new_users.forEach(username => {
    if (isUsernameAvailable(username)) {
        console.log(`The username '${username}' is available.`);
    } else {
        console.log(`The username '${username}' is already taken. Please enter a new username.`);
    }
});