'use strict';
let targetElement = document.getElementById("target");

let x = "<li>First item</li><li>Second item</li><li>Third item</li>";
targetElement.innerHTML = x;
targetElement.classList.add("my-list");