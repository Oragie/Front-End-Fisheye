import { getPhotographers } from "../api/api.js";
import { PhotographerCard } from "../components/PhotographerCard.js";
import { photographerTemplate } from "../templates/photographer.js";

// function to call api and template for index.html
async function init() {
  const photographers = await getPhotographers();
  const { createHomePage } = photographerTemplate();

  createHomePage(photographers);
}

init();
