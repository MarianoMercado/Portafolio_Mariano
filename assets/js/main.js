const MenuNavbar = document.querySelector(".toggle-menu");
const navbarlist = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");

const projectsContainer = document.querySelector(".projects-container");

//cerrar al hacer click fuera del menu
const closeOnOverlayClick = () => {
  navbarlist.classList.remove("open-Navbar");
  overlay.classList.toggle("show-overlay");
};

//cerrar  menu
const closeOnClick = (e) => {
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

//crear cards
const createProjetsCard = (projet) => {
  const { id, title, description, img, category, gitHub, sitio } = projet;

  let sitioLink = "";
  if (sitio) {
    sitioLink = `<a href="${sitio}" target="_blank">
                      Sitio <i class="fa-solid fa-globe"></i>
                </a>`;
  }

  return `   
          <div class="projects-card">
            <img src="${img}" alt="${(title, category)}" >
              <div class="projects-card-description">
                <strong>${title}</strong>
                <span>${description}</span>
              </div>
              <div class="projects-card-info">
                <a href="${gitHub}" target="_blank">
                   github <i class="fa-brands fa-github"></i>
                </a>
                ${sitioLink}
              </div>
          </div>       
`;
};

//render projects
const renderProjects = () => {
  debugger;
  projectsContainer.innerHTML = projectsData.map(createProjetsCard).join("");
};

const init = () => {
  renderProjects();
  MenuNavbar.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeOnOverlayClick);
  navbarlist.addEventListener("click", closeOnClick);
};
init();
