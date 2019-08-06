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

//Keydown
document.querySelector('body').addEventListener('keydown', myKeydownFunc);

function myKeydownFunc() {
    alert('UH-OH, you pressed a button!');
}

//Wheel
document.querySelector('.home').addEventListener('wheel', myWheelFunc);

function myWheelFunc() {
    this.style.color = 'dodgerblue';
}

//Click
document.querySelector('.text-content h2').addEventListener('click', myClick)

function myClick() {
    document.querySelector(".text-content h2").textContent = "Let's get this party started!"
}

//Load
window.addEventListener('load', function(event) {
    alert('The Venga bus is coming and everybodys jumping!' );
 })
 
