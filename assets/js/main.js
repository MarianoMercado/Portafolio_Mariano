const MenuNavbar = document.querySelector(".toggle-menu");
const navbarlist = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");

const closeOnOverlayClick = () => {
  navbarlist.classList.remove("open-Navbar");

  overlay.classList.toggle("show-overlay");
};
const closeOnClick = (e) => {
  debugger;
  if (!e.target.classList.contains("navbar-link")) {
    return;
  }
  navbarlist.classList.remove("open-Navbar");
  overlay.classList.remove("show-overlay");
};
/*navbar* */
const toggleMenu = () => {
  navbarlist.classList.toggle("open-Navbar");
  overlay.classList.toggle("show-overlay");
};

const init = () => {
  MenuNavbar.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeOnOverlayClick);
  navbarlist.addEventListener("click", closeOnClick);
};
init();
