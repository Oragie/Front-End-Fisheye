import { PhotographerCard } from "../components/PhotographerCard.js";

export function photographerTemplate() {
  function createPhotographersGallery(photographers) {
    const photographerSection = document.querySelector(".photographer_section");
    photographerSection.innerHTML = ""; // Clear any existing content
    photographers.forEach((photographer) => {
      const card = PhotographerCard(photographer);
      photographerSection.appendChild(card); // à sortir pour reutiliser
    });
    // Function to get the photographer ID from the URL
    function getPhotographerIdFromURL() {
      const params = new URLSearchParams(window.location.search);
      return params.get("id");
    }
  }

  return { createPhotographersGallery };
  return { getPhotographerIdFromURL };
}
5;
