import { getPhotographers } from "../api/api.js";
import { photographerTemplate } from "../templates/photographer.js";

async function init() {
  const photographers = await getPhotographers();
  const { createPhotographersGallery } = photographerTemplate();

  createPhotographersGallery(photographers);
}

document.addEventListener("DOMContentLoaded", init);
