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

    //-----------------------------
    // Fonction pour mettre à jour la galerie
    const updateGallery = (sortedMedia) => {
      const existingGallery = document.querySelector(".image-container");
      if (existingGallery) {
        console.log("Suppression de la galerie existante...");
        existingGallery.remove(); // Supprime la galerie actuelle avant d'en créer une nouvelle
      }

      console.log("Création d'une nouvelle galerie avec les médias triés...");
      const gallery = PhotographGallery(photographer, sortedMedia);
      main.appendChild(gallery);
    };

    // Appel du composant SortBy en passant la fonction de mise à jour de la galerie
    const sortBy = SortBy(photographerMedia, updateGallery);
    main.appendChild(sortBy);

    // Initialiser la galerie par défaut (non triée)
    updateGallery(photographerMedia);
    //-------------------------

    const likesFooter = LikesFooterPrice(photographer, photographerMedia);
    main.appendChild(likesFooter);
  }

  return {
    createHomePage,
    createPhotographerPage,
  };
}
