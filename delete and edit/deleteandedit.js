let form = document.getElementById('addForm')
let itemlist = document.getElementById('items')

// adding event listner
form.addEventListener('submit', additem);
// removing the item
itemlist.addEventListener('click', removeitem)

// add item
function additem(e) {
    e.preventDefault();
    // get input value
    let  newitem = document.getElementById('item').value
    // create a new li element
    let li = document.createElement('li')
    li.className = 'list-group-item'
    // add value to list
    li.appendChild(document.createTextNode(newitem))

    // add delete button in new li element
    let delbtn = document.createElement('button')
    let edit = document.createElement('button')

    // Add classes to del button
    delbtn.className = 'btn btn-danger btn-sm float-right delete';
    edit.className = 'btn btn-danger btn-sm float-right'

    // add textnode to btn
    delbtn.appendChild(document.createTextNode('X'))
    edit.appendChild(document.createTextNode('Edit'))

    // add btn to li
    li.appendChild(edit)
    li.appendChild(delbtn)
    

    // add li to list
    itemlist.appendChild(li)
}

// remove item
function removeitem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemlist.removeChild(li)
        }
    }
}
