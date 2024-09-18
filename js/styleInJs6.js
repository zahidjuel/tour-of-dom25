const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid blue';
    section.style.borderRadius = "5px";
    section.style.marginBottom = '20px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = "gray";
}

/* const palcesContainer = document.getElementById('places-container');
palcesContainer.style.backgroundColor = 'yellow'; */

const palcesContainer = document.getElementById('places-container');
palcesContainer.classList.add('text-center');
palcesContainer.classList.remove('lg-font');