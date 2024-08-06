import { createNavbar, displayPhotographers } from "./component.js";
import { fetchPhotographers } from "./api.js";

async function init() {
  // Crée la navbar et l'ajoute au DOM
  const main = document.getElementById("main");
  const navbar = createNavbar();
  document.body.insertBefore(navbar, main);

  // Récupère les données des photographes et les affiche
  const photographers = await fetchPhotographers();
  if (photographers) {
    displayPhotographers(photographers);
  }
}

// Initialise la page
init();
