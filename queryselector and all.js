//QUERY SELECTOR
let item = document.querySelector('.list-group-item:nth-child(2)')
item.style.backgroundColor = 'green'

let thirditem = document.querySelector('.list-group-item:nth-child(3)')
thirditem.textContent = ''

// QUERY SELECTOR ALL
let odd = document.querySelectorAll('li:nth-child(odd)')

for(var i=0; i<odd.length; i++) {
    odd[i].style.backgroundColor = 'grey'
}
-