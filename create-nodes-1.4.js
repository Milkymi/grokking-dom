const ul = document.createElement('ul');
ul.className = 'list';
document.body.append(ul);

const li = document.createElement('li');
li.textContent = "привет, мир";
ul.append(li);

console.log(ul);
console.log(li);