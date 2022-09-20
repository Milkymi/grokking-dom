const div = document.createElement('div');
const ul = document.createElement('ul');
const li = document.createElement('li');
const liPi = document.createElement('li');

li.innerHTML = `<a href="https://instagram.com">наш инстаграм</a>`
liPi.innerHTML = ` <a href="https://pinterest.ru">наш сайт</a>`

div.append(ul);
ul.append(li, liPi);
document.body.append(div);

console.log(div);
