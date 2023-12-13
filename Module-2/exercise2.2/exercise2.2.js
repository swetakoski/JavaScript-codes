'use strict';
 let numParticipants = prompt("Enter the number of participants: ");
 let participantNames = [];
 for (let i = 0; i < numParticipants; i++) {
   let participantName = prompt("Enter the name of participants: ");
        participantNames.push(participantName);
 }
    participantNames.sort();
document.getElementById('target').innerHTML= "The participants are: " + participantNames;