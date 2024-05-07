let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navber = document.querySelector('.navber');

const customSearch = document.querySelector('header .custom-search')

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    customSearch.classList.toggle('active');
})


window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    // ========== fa-times
    // menu.classList.remove('active');
    // =============active
    // navber.classList.remove('fa-time');
    loginForm.classList.remove('active');
}
menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navber.classList.toggle('active');
});

// =================  toggole button ==========//

// navber.addEventListener('click', () => {
//     navber.classList.toggle('active');
//     menu.classList.toggle('fa-times');
// });



// searchBtn.addEventListener('click', () => {
//     searchBtn.classList.toggle('fa-times');
//     searchBar.classList.toggle('active');
// });

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});



