// Your code goes here

//Mouseover
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', () => {
    logoHeading.classList.toggle('change-color');
});

//Mouseout
logoHeading.addEventListener('mouseout', () => {
    logoHeading.classList.toggle('change-color-again')
})
