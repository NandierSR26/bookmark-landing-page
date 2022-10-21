const tab_1 = document.querySelector('.tab--1');
const tab_2 = document.querySelector('.tab--2');
const tab_3 = document.querySelector('.tab--3');
const tabs = document.querySelectorAll('.tab');

const tab_content = document.querySelectorAll('.feature__tabs__content');

const answer = document.querySelectorAll('.answer');
const question__title = document.querySelectorAll('.question__title');
const acordeon_arrows = document.querySelectorAll('.question i')
console.log( acordeon_arrows );


cargarEventListeners();

function cargarEventListeners() {
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            tabs.forEach((tab, j) => {
                tab.classList.remove('tab--active');
            });
            tab.classList.add('tab--active');
            switch (i) {
                case 0:
                    tab_content[i].classList.remove('none');
                    tab_content[i+1].classList.add('none');
                    tab_content[i+2].classList.add('none');
                    break;

                case 1:
                    tab_content[i-1].classList.add('none');
                    tab_content[i].classList.remove('none');
                    tab_content[i+1].classList.add('none');
                    break;

                case 2:
                    tab_content[i-2].classList.add('none');
                    tab_content[i-1].classList.add('none');
                    tab_content[i].classList.remove('none');
            
                default:
                    break;
            }
        });
    })
   
    
    question__title.forEach((title, i) => {
        title.addEventListener('click', () => {
            answer[i].classList.toggle('activo');
            acordeon_arrows[i].classList.toggle('question__active')
        });
    })

}
