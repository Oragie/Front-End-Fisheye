import { getPhotographers } from "../api/api.js";
import { getMediaPhotographerById } from "../api/api.js";

import { photographerFactory } from "../template/photographer.js";

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

      // Trier les médias par popularité ici
      const sortedMedia = photographerMedia.sort((a, b) => b.likes - a.likes);

      const { createPhotographerPage } = photographerFactory();

      createPhotographerPage(photographer, sortedMedia);
    } else {
      console.error(`aucun photographer avec cette id: ${photographerId}`);
    }
  } else {
    console.error("aucun photographer ID dans l'URL");
  }
}

init();
