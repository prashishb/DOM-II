// Your code goes here

const navLinks = document.querySelectorAll('.nav a');
console.log(navLinks);

// mouseover / mouseout event
navLinks.forEach(elem => elem.addEventListener('mouseover', () => elem.style.textDecoration = 'underline'));

navLinks.forEach(elem => elem.addEventListener('mouseout', () => elem.style.textDecoration = 'none'));

