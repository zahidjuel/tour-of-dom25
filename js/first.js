// console.log('inside the first JavaScript file');
const allLi = document.getElementsByTagName('li');
console.log(allLi);

const sectionTitle = document.getElementsByClassName('section-title');
console.log(sectionTitle);

const thirdSection = document.getElementById('third-section');
console.log(thirdSection);
thirdSection.style.color = 'white';
thirdSection.style.backgroundColor = 'tomato';
thirdSection.style.padding = '30px';
thirdSection.style.borderRadius = '18px';

// document.querySelectorAll
// document.querySelector