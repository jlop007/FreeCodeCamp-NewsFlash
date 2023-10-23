// Grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something Went Wrong, make sure that ${selector} exists or its typed correctly`
  );
};

//Nav styles on scroll
const scrollHeader = () => {
  const headerElement = selectElement("#header");
  if (this.scrollY >= 15) {
    headerElement.classList.add("active");
  } else {
    headerElement.classList.remove("active");
  }
};

window.addEventListener("scroll", scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = selectElement("#menu-toggle-btn");

const toggleMenu = () => {
  const mobileMenu = selectElement("#menu");
  mobileMenu.classList.toggle("active");
};

menuToggleIcon.addEventListener("click", toggleMenu);
// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement("#theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
  bodyElement.classList.add("light-theme");
}
themeToggleBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("light-theme");

  if (bodyElement.classList.contains("light-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});

// Swiper
