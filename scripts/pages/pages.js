import { fetchPhotographers } from "./api.js";
import { createPhotographerCards } from "./component.js";

async function init() {
  const photographers = await fetchPhotographers();
  createPhotographerCards(photographers);
}

document.addEventListener("DOMContentLoaded", init);
