import { Header } from "../components/Header.js";
import { LikesFooterPrice } from "../components/LikesFooterPrice.js";
import { PhotographHeader } from "../components/PhotographHeader.js";
import { SortBy } from "../components/SortBy.js";
import { PhotographGallery } from "../components/Gallery.js";
import { BrowsePhotographers } from "../components/BrowsePhotographers.js";
import { ContactForm } from "../components/ContactForm.js";

export function photographerTemplate() {
  function createHomePage(photographers) {
    const main = document.querySelector("#main");

    const header = Header();
    main.appendChild(header);

    const photographersAvatars = BrowsePhotographers(photographers);
    main.appendChild(photographersAvatars);
  }

  function createPhotographerPage(photographer, photographerMedia) {
    const main = document.querySelector("#main");

    const header = Header();
    main.appendChild(header);

    const photographerHeader = PhotographHeader(photographer);
    main.appendChild(photographerHeader);

    const formWrapper = ContactForm(photographer);
    photographerHeader.appendChild(formWrapper);

    const sortBy = SortBy(photographerMedia);
    main.appendChild(sortBy);

    const gallery = PhotographGallery(photographer, photographerMedia);
    main.appendChild(gallery);

    const likesFooter = LikesFooterPrice(photographer, photographerMedia);
    main.appendChild(likesFooter);
  }

  return {
    createHomePage,
    createPhotographerPage,
  };
}
