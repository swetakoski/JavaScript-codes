'use strict';
const numberList =[];
let loop = true;
for (let i = 0; i < 5; i++){
  const num=+prompt("Enter a number: " );

    numberList.push(num);
  }

console.log("Numbers in reverse order:");

for (let i = numberList.length - 1; i >= 0; i--) {
    console.log(numberList[i]);
}