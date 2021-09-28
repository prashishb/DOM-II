// Your code goes here

const navLinks = document.querySelectorAll('.nav a');
let headerImg = document.querySelector('header img');

// mouseover / mouseout event
navLinks.forEach(elem => elem.addEventListener('mouseover', () => {
    elem.style.textDecoration = 'underline';
    elem.style.textDecorationThickness = '0.5rem';
    elem.style.textDecorationColor = '#f44336';
}));

navLinks.forEach(elem => elem.addEventListener('mouseout', () => elem.style.textDecoration = 'none'));

// popup on page load
window.addEventListener('load', () => alert("I am a popup!!!!"));

// random header image onclick
headerImg.addEventListener('click', () => headerImg.src = 'https://source.unsplash.com/random/800x250');

