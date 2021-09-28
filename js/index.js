// Your code goes here

const navLinks = document.querySelectorAll('.nav a');
const headerImg = document.querySelector('header img');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const imgs = document.querySelectorAll('.img-content');
const contentSection = document.querySelector('.content-section');
const contentText = document.querySelector('.text-content');

// mouseover event underline navLinks style
navLinks.forEach(elem => elem.addEventListener('mouseover', () => {
    elem.style.textDecoration = 'underline';
    elem.style.textDecorationThickness = '0.5rem';
    elem.style.textDecorationColor = '#f44336';
}));

// mouseout event default navLinks styles
navLinks.forEach(elem => elem.addEventListener('mouseout', () => elem.style.textDecoration = 'none'));

// popup on page load
window.addEventListener('load', () => alert("I am a popup!!!!"));

// onclick event generate random header image
headerImg.addEventListener('click', () => headerImg.src = 'https://source.unsplash.com/random/800x250');

// doubleclick event to change bg color
window.addEventListener('dblclick', () => {
    console.log('pineapples');
    if (body.style.backgroundColor === '') {
        body.style.backgroundColor = 'AliceBlue';
    } else {
        body.style.backgroundColor = '';
    }
});

// nav bg color change when scrolled to bottom of page
document.addEventListener('scroll', () => {
    let documentHeight = document.body.scrollHeight;
    let currScroll = window.scrollY + window.innerHeight;
    let modifier = 200;
    if (currScroll + modifier > documentHeight) {
        document.querySelector('.main-navigation').style.background = '#FFEBCD';
    } else {
        document.querySelector('.main-navigation').style.background = '#FFFFFF';
    }
})

//right click event change h1 text color
window.addEventListener('contextmenu', () => {
    if (h1.style.color === '') {
        h1.style.color = '#f44336';
    }
});
//reset h1 text color
window.addEventListener('click', () => h1.style.color = '');

//mousedown event to hide content images
window.addEventListener('pointerdown', () => imgs.forEach(elem => elem.style.visibility = 'hidden'));

//mouseup event to show content images
window.addEventListener('pointerup', () => imgs.forEach(elem => elem.style.visibility = 'visible'));

//resize event alert
window.addEventListener('resize', () => alert('window resized!!!!'));

//stopPropagation
contentText.addEventListener('click', (event) => {
    alert('clicked Text Section');
    event.stopPropagation();
});

contentSection.addEventListener('click', () => alert('clicked section content'));

//stop nav links from refreshing page
navLinks.forEach(elem => elem.addEventListener('click', (event) => event.preventDefault()));
