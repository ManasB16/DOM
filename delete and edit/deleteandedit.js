let form = document.getElementById('addForm')
let itemlist = document.getElementById('items')
let filter = document.getElementById('filter')

// adding event listner
form.addEventListener('submit', additem);
// removing the item
itemlist.addEventListener('click', removeitem)
// filteritems
filter.addEventListener('keyup', filterItems)

// add item
function additem(e) {
    e.preventDefault();
    // get input value
    let  newitem = document.getElementById('item').value
    let  description = ' ' + document.getElementById('description').value
    // create a new li element
    let li = document.createElement('li')
    li.className = 'list-group-item'
    // add value to list
    li.appendChild(document.createTextNode(newitem))
    li.appendChild(document.createTextNode(description))

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
    li.appendChild(delbtn)
    li.appendChild(edit)

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

// filter items from search
function filterItems(e) {
    // convert search text to lowercase
    let text = e.target.value.toLowerCase()

    // getting list
    let items = document.getElementsByTagName('li')
    
    // convert to array
    Array.from(items).forEach(function(item) {
        
        let itemname = item.firstChild.textContent
        let descriptionname = item.childNodes[1].textContent

        if(itemname.toLowerCase().indexOf(text) != -1 || descriptionname.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}