// click
var burgerMenu = document.querySelector('.burger-menu');
// action
var body= document.querySelector('body');
// action
var enfantMenu = document.querySelectorAll('.burger-menu');


burgerMenu.addEventListener('click', function() {
    body.classList.toggle('--isActive');
    
})

enfantMenu.forEach(function(tous) {
    console.log(tous)
    burgerMenu.addEventListener('click', function() {
     enfantMenu.classList.toggle('--isActive');

})
})


