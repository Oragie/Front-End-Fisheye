import { getPhotographers } from "../api/api.js";

import { photographerFactory } from "../factory/photographer.js";

// function to call api and template for index.html
async function init() {
  const photographers = await getPhotographers();
  const { createHomePage } = photographerFactory();

  createHomePage(photographers);
}

init();
