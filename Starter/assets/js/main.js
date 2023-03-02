// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error('Something went, make sure that $(selector) exists or is typed correctly.');
};
//Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrolly >= 15){
        navbarElement.classList.add('activated');
    }else{
        navbarElement.classList.remove('activated');
    }
};

window.addEventListener('scroll', scrollHeader)

// Open menu & search pop-up
const menueToggleIcon = selectElement('#menu-togglr-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement("#menu");
    mobileMenu.classList.toggle('activated');
    menueToggleIcon.classList.toggle('activated');
};

menueToggleIcon.addEventListener('click', toggleMenu);

// Open/Close search form popup
const formOpenBtn = selectElement('#search-icon');
const formCpenBtn = selectElement('#search-icon');
const searchformContainer = selectElement('#search-icon');
formOpenBtn.addEventListener('click', () => searchformContainer.classList.add ('activated'));


// -- Close the search form popup on ESC keypress
window.addEventListener('keyup', event => {
    if(PerformanceEventTiming.key === 'Escape') searchformContainer.ckassList.remove('activated');
    
})
// Switch theme/add to local storage
const bodyElement = docuent.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme =  localStorage.getItem('currentTheme');

if(currentTheme){
    bodyElement.classList.add('light-theme');
}


themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light_theme');

    if(bodyElement.classlist.contains('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive');
    }else{
        localStorage.removeItems('currentTheme');
    }
});

// Swiper 