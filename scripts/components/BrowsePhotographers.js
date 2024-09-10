import { PhotographerCard } from "./PhotographerCard.js";

export function BrowsePhotographers(photographers) {
  const photographerSection = document.createElement("div");
  photographerSection.classList.add("photographer_section");

  photographers.forEach((photographer) => {
    const card = PhotographerCard(photographer);
    photographerSection.appendChild(card);
  });
  return photographerSection;
}
