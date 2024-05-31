const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const searchBarImg = document.querySelector('#search-img img');
const searchBar = document.getElementById('show-search-bar')
const header = document.querySelector('header');

function toggleMobileMenu(){
    mobileMenu.classList.toggle('open');
    header.classList.toggle('fixed');
};

function toggleSearchBar(){
    searchBar.classList.toggle('show');
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);
searchBarImg.addEventListener('click', toggleSearchBar);