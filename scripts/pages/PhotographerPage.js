// Utilisez `photographerId` pour récupérer et afficher les données du photographe

import { PhotographerContent } from "../components/PhotographerContent.js";
import { getPhotographers } from "../api/api.js";
import { photographerPageTemplate } from "../templates/galleryPhotographer.js";

// import { photographerPageTemplate } from "../templates/photographer.js";

// function to call api and template for index.html
async function init() {
  // const urlParams = new URLSearchParams(window.location.search);
  // const photographerId = urlParams.get("id");
  const photographers = await getPhotographers(); //byid

  const { createPhotoGalleryContent } = photographerPageTemplate();

  createPhotoGalleryContent(photographers);
}

document.addEventListener("DOMContentLoaded", init);
