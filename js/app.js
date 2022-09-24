const tab_1 = document.querySelector('.tab--1');
const tab_2 = document.querySelector('.tab--2');
const tab_3 = document.querySelector('.tab--3');
const tabs = document.querySelectorAll('.tab');

const tab_content = document.querySelectorAll('.feature__tabs__content');

const answer = document.querySelectorAll('.answer');
const question__title = document.querySelectorAll('.question__title');



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
    // tab_1.addEventListener('click', (e) => {

    //     if (!tab_1.classList.contains('tab--active')) {
    //         tab_1.classList.add('tab--active');
    //         tab_2.classList.remove('tab--active');
    //         tab_3.classList.remove('tab--active');
    //     }
    // });

    // tab_2.addEventListener('click', (e) => {

    //     if (!tab_2.classList.contains('tab--active')) {
    //         tab_2.classList.add('tab--active');
    //         tab_1.classList.remove('tab--active');
    //         tab_3.classList.remove('tab--active');
    //     }
    // });

    // tab_3.addEventListener('click', (e) => {

    //     if (!tab_3.classList.contains('tab--active')) {
    //         tab_3.classList.add('tab--active');
    //         tab_2.classList.remove('tab--active');
    //         tab_1.classList.remove('tab--active');
    //     }
    // });

    question__title.forEach((title, i) => {

        title.addEventListener('click', () => {
            answer[i].classList.toggle('activo');
        });
    
    })

}
