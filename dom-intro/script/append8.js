// 1. where to add
const placesList = document.getElementById('places-list');
// create a new element
// 2. what to be added
const newLi = document.createElement('li');
newLi.innerText = 'Hatibon';
//3. add the child
placesList.appendChild(newLi);

// 1. where to add
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer);
// 2. what to be added
const newSection = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
newSection.appendChild(h1);

const ul = document.createElement('ul');
newSection.appendChild(ul);

const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Teheri';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Kacchi';
ul.appendChild(li3);

mainContainer.appendChild(newSection);

// set new section using innner HTML;
const dressSection = document.createElement('section');
dressSection.innerHTML = `
<h1>My dress List</h1>
<ul>
<li>Denim pant</li>
<li>Denim jacket</li>
<li>Bluecheez Panjabi</li>
</ul>
`
mainContainer.appendChild(dressSection);