'use strict';

var num1=prompt("Enter your first number: ");
var num2=prompt("Enter your second number: ");
var num3= prompt("Enter your third number: ")

num1=parseInt(num1);
num2=parseInt(num2);
num3=parseInt(num3)

var sum=num1+num2+num3;
var product=num1*num2*num3;
var average=(num1+num2+num3)/3
document.getElementById('target').innerHTML= "Sum of three numbers is: " + sum + '.' + ' ' + "The product of three numbers is: " + product + '.' + ' ' + "The average of three numbers is: " + average;
