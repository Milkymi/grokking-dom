const ul = document.createElement('ul');
let array = ["html", "css", "js"];

for(let i = 0; i< array.length; i++){
    let li = document.createElement('li');
    li.append(`${array[i]}`);
    ul.append(li);
}

document.body.append(ul);
console.log(ul);