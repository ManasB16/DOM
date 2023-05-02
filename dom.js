console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 123
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);

let header = document.getElementById('main-header')
header.style.borderBottom = 'solid 3px black';

let additems = document.getElementById('additem')
additems.style.fontWeight = 'bold';
additems.style.color = 'yellow';

let listgroup = document.getElementsByClassName('list-group-item')
console.log(listgroup)
listgroup[1].style.backgroundColor = 'green'

for(var i=0; i<listgroup.length; i++) {
    listgroup[i].style.fontWeight = 'bold'
}