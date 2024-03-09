let Guest_list :string[] = ['Rafay','Fatima','Emaan'];

// for(let i=0; i<Guest_list.length; i++){

//     console.log('Dear Mr./Ms. ' + Guest_list[i] + ',\n\nIt is our pleasure to have you in our Function.\n\nThank you!')
// }

let absent_Guest: string = 'Emaan' ;

let new_Guest: string = 'Maryam' ;

Guest_list[2] = new_Guest ;

for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr./Ms. ' + Guest_list[i] + ',\n\nIt is our pleasure to have you in our Function.\n\nThank you!\n\n')
}

console.log(`Ms. ${absent_Guest} is not coming to the function.`);

console.log('Good news! We found a bigger dinner table.');

Guest_list.unshift('Wasay');
Guest_list.splice(2 , 0 , 'Danish');
Guest_list.push('Beenish');


for(let i=0; i<Guest_list.length; i++){

    console.log('Dear Mr./Ms. ' + Guest_list[i] + ',\n\nIt is our pleasure to have you in our Function.\n\nThank you!\n\n')
}