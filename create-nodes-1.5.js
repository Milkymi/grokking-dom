const divRed = document.createElement('div');
const divGreen = document.createElement('div');
const divBlue = document.createElement('div');

divRed.className = 'red';
divGreen.className = 'green';
divBlue.className = 'blue';
divBlue.textContent = "я вложен";

divRed.append(divGreen);
divGreen.append(divBlue);

console.log(divRed);
console.log(divGreen);
console.log(divBlue);