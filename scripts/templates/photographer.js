import { PhotographerCard } from "../components/PhotographerCard.js";

export function photographerTemplate() {
  function createPhotographersGallery(photographers) {
    const photographerSection = document.querySelector(".photographer_section");
    photographerSection.innerHTML = ""; // Clear any existing content
    photographers.forEach((photographer) => {
      const card = PhotographerCard(photographer);
      photographerSection.appendChild(card); // à sortir pour reutiliser
    });
  }
  function createPhotoGalleryContent(photographers) {
    // const urlParams = new URLSearchParams(window.location.search);
    // const photographerId = urlParams.get("id"); dans la page =>
    const photographerHeader = document.querySelector(".photographer_header");
    photographerHeader.innerHTML = ""; // Clear any existing content

    photographerId((photographer) => {
      const photographeHeader = PhotographerContent(photographer);
      photographerHeader.appendChild(photographeHeader);
    });
  }

  return { createPhotographersGallery };
}
