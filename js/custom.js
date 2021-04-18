const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const bar_1 = document.querySelector('.bar_1');
const bar_2 = document.querySelector('.bar_2');
const wrapper = document.querySelector('.wrapper');
const links = document.querySelectorAll('.navbar ul li');
const last_child = document.querySelector('last_child');


hamburger.addEventListener('click', () => {
    wrapper.classList.toggle('open');
    bar_1.classList.toggle('cross_1');
    bar_2.classList.toggle('cross_2');
    body.classList.toggle('overflow');
});

last_child.addEventListener('click', () => {
    body.classList.toggle('overflow_2');
});

// if(last_child !== null){
//     last_child.addEventListener('click', () => {
//         body.classList.toggle('overflow_2');
//     });
// };









