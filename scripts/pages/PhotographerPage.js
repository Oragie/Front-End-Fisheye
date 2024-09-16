import { getPhotographers } from "../api/api.js";
import { getMediaPhotographerById } from "../api/api.js";

import { photographerTemplate } from "../templates/photographer.js";

// fonction to "get" photographer ID de l'URL
function getPhotographerIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

// fonction pour appeler l'api et le template pour photographer.html
async function init() {
  const photographerId = getPhotographerIdFromUrl();

  if (photographerId) {
    const photographers = await getPhotographers();
    const photographer = photographers.find((p) => p.id == photographerId);

    if (photographer) {
      const photographerMedia = await getMediaPhotographerById(photographerId);
      const { createPhotographerPage } = photographerTemplate();

      createPhotographerPage(photographer, photographerMedia);

      // Ajoute l'écouteur d'événement après l'injection du contenu
      const contactMeButton = document.querySelector(".contact_button");
      const formWrapper = document.querySelector(".form_wrapper");

      if (contactMeButton && formWrapper) {
        //ouverture du modal
        contactMeButton.addEventListener("click", () => {
          formWrapper.style.display = "flex";
        });
        // Fermer le formulaire en cliquant sur le "X"
        closeButton.addEventListener("click", () => {
          formWrapper.style.display = "none"; // Masque le formulaire
        });
      } else {
        console.error("Le bouton ou le formulaire n'existe pas dans le DOM.");
      }
    } else {
      console.error(`aucun photographer avec cette id: ${photographerId}`);
    }
  } else {
    console.error("aucun photographer ID dans l'URL");
  }
}

init();
