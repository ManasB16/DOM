//TRAVERSING THE DOM

// 1.PARENTELEMENT
let item = document.querySelector('#items')
let aitem = document.querySelector('#additem')
console.log(item.parentElement);
item.parentElement.style.backgroundColor = 'skyblue'

// 2.LASTELEMENTCHILD 
item.lastElementChild.textContent = 'Hello 4'

// 3.LASTCHILD
console.log(item.lastChild)

// 4.CREATECHILD
    let newdiv = document.createElement('div')

//ADD CLASS
    newdiv.className = 'hello'

//ADD ID
    newdiv.id = 'hello1'

//ADD ATTRIBUTE
    newdiv.setAttribute('title', 'hellodiv');

//ADD TEXTNODE
    let newdivtext = document.createTextNode('Hello World')

    newdiv.appendChild(newdivtext);

    let container = document.querySelector('header .container')
    let h1 = document.querySelector('header h1')

    container.insertBefore(newdiv, h1)

// 5.FIRSTELEMENTCHILD
console.log(item.firstElementChild)

// 6.FIRSTCHILD
console.log(item.firstChild)

// 7. NEXTSIBLING
console.log(item.nextSibling)

// 8. NEXTELEMENTSIBLING
console.log(aitem.nextElementSibling)

// 9.PREVIOUSSIBLING
console.log(item.previousSibling)

// 10.PREVIOUELEMENTSSIBLING
console.log(item.previousElementSibling)

item.innerHTML = '<li>Hello World</li>' + item.innerHTML 
.


