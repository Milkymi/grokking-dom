const ul = document.createElement('ul');
let array = [
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'Pinterest',
      url: 'https://pinterest.ru'
    },
  ];

function render(arr) {
    for(let i = 0; i< arr.length; i++){
        let li = document.createElement('li');
        li.innerHTML = (`<a href= ${arr[i].url}> ${arr[i].name}</a>`);
        ul.append(li);
        document.body.append(ul);
    }
}
render(array);

