'use strict';
console.log('Here \'s a hidden menssage');

let today = new Date();
let formatDate = today.toDateString();
let selectElement =  document.getElementById('date');
selectElement.innerHTML = formatDate;
