var userList = document.querySelector('#user-list');

var xml = new XMLHttpRequest();

xml.open('get', 'https://jsonplaceholder.typicode.com/users');

xml.responseType = 'json';

xml.addEventListener('load', xmlFunction);

function xmlFunction() {
  console.log(xml.status);
  console.log(xml.response);
  for (var i = 0; i < xml.response.length; i++) {
    var li = document.createElement('li');
    li.textContent = xml.response[i].name;
    userList.appendChild(li);
  }
}
xml.send();
