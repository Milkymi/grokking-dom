const ul = document.createElement('ul');
let array = ["html", "css", "js"];

function render(arr) {
    for(let i = 0; i< arr.length; i++){
        let li = document.createElement('li');
        li.append(`${arr[i]}`);
        ul.append(li);
        document.body.append(ul);
    }
}
render(array);

