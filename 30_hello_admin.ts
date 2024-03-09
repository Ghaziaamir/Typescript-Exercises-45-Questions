
const userName :string[] = ['Admin','Ramish', 'Ashir', 'Ismaeel', 'Hesham'];

for(let i=0; i<userName.length; i++){
    if(userName[i] === 'Admin')
    {
        console.log('Hello admin, would you like to see a status report?');
    }
    else{
        console.log(`Hello ${userName[i]}, thank you for logging in again`)
    }
}