'use strict';
 let dogNames = [];
 for (let i = 0; i < 6; i++) {
   let dogName = prompt("Enter the name of dogs: ");
        dogNames.push(dogName);
 }
    dogNames.sort().reverse();
document.getElementById('target').innerHTML= "The names of the dogs are: " + dogNames;