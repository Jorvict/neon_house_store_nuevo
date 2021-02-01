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