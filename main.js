//Examine the Document Object
//console.dir(document)
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);

//Body element
const bodyElement = document.querySelector('body')
//create div element
const divElement = document.createElement('div')
bodyElement.append(divElement)
//Button element
const buttonElement = document.createElement('button') //geeksforgeeks.org
//append button to parent elemenet
bodyElement.append(buttonElement)
buttonElement.append('Click Me! Click Me!')
//add event listener
/*buttonElement.addEventListener ("click", function() {
    alert("removed image"); //codepen.io/davidcochran/
    mainElement.remove() //define maine element
  });*/

const mainElement = document.createElement('main')
bodyElement.append(mainElement)

//image element
const imgElement = document.createElement('img')
imgElement.className = 'image'
imgElement.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Puffin_Latrabjarg_Iceland.jpg/315px-Puffin_Latrabjarg_Iceland.jpg";
mainElement.append(imgElement)



//anchor tag
const anchorElement = document.createElement('anchor')
anchorElement.className = 'link'
anchorElement.href = 'https://en.wikipedia.org/wiki/Penguin'
anchorElement.append('Wikipedia')
mainElement.append(anchorElement)

buttonElement.addEventListener ('click', function() {
    alert('remove image?'); //codepen.io/davidcochran/
    mainElement.remove() //define maine element
  });
