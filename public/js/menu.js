const menuButton = document.querySelector('.burger-button');
console.log(menuButton);
const menu = document.querySelector('.menu');
console.log(menu);

function ShowHideMenu(){
    if(menu.classList.contains('is-active')){
        menu.classList.remove('is-active');
    }
    else{
        menu.classList.add('is-active');
    }
}
menuButton.addEventListener('click', ShowHideMenu);

// Desplegar submenu 1
const displayfirstbutton = document.querySelector('.fas.first');
console.log(displayfirstbutton);
const firstoption = document.querySelector('.hidden-desk.first');

function ShowHideFirst(){
    if(firstoption.classList.contains('is-active')){
        firstoption.classList.remove('is-active');
    }
    else{
        firstoption.classList.add('is-active');
    }
}
displayfirstbutton.addEventListener('click', ShowHideFirst);

// Desplegar submenu 2
const displaysecondbutton = document.querySelector('.fas.second');
const secondoption = document.querySelector('.hidden-desk.second');

function ShowHideSecond(){
    if(secondoption.classList.contains('is-active')){
        secondoption.classList.remove('is-active');
    }
    else{
        secondoption.classList.add('is-active');
    }
}
displaysecondbutton.addEventListener('click', ShowHideSecond);