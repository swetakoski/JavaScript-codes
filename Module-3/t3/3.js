'use strict';
const names = ['John', 'Paul', 'Jones'];

let targetElement = document.getElementById("target");
let htmlCode = "";
for (let i = 0; i < names.length; i++) {
    htmlCode += "<li>" + names[i] + "</li>";
}

targetElement.innerHTML = htmlCode;
