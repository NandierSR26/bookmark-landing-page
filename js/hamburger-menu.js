(function(){
    const list = document.querySelector('.nav__links');
    const menu = document.querySelector('.hamburger-menu');
    const logo_white = document.querySelector('.logo--white');
    const logo_default = document.querySelector('.logo--default');

    menu.addEventListener('click', ()=> {
        list.classList.toggle('nav__links--show')
        menu.classList.toggle("change");
        logo_white.classList.toggle("none");
        logo_default.classList.toggle("none");
    });




})();

