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

  return { createPhotographersGallery };
}
