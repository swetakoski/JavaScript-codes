'use strict';
let userName=prompt("Hello Young Wizard! Welcome to Hogwarts! Please enter you name: ");
let house1="Gryffindor";
let house2= " Slytherin";
let house3= "Hufflepuff";
let house4= "Ravenclaw";
let randomNumber=Math.floor(Math.random()*4) +1;

let sortHouse;
switch (randomNumber) {

  case 1:
    sortHouse=house1;
    break;
  case 2:
    sortHouse=house2;
    break;
  case 3:
    sortHouse=house3;
    break;
  case 4:
    sortHouse=house4;
    break;
}


document.getElementById('target').innerHTML= "Hello " + userName + '!' + "You have been sorted to: " + sortHouse + '.' + "Welcome to world of magic!.";
