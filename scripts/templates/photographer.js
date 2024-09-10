import { PhotographerCard } from "../components/PhotographerCard.js";
import { Header } from "../components/Header.js";

import { PhotographHeader } from "../components/PhotographHeader.js";
import { SortBy } from "../components/SortBy.js";
import { PhotographGallery } from "../components/Gallery.js";

export function photographerTemplate() {
  function createHomePage(photographers) {
    const main = document.querySelector("#main");

    const header = Header();
    main.appendChild(header);

    const photographersAvatars = createBrowsePhotographers(photographers);
    main.appendChild(photographersAvatars);
  }
  function createBrowsePhotographers(photographers) {
    const photographerSection = document.createElement("div");
    photographerSection.classList.add("photographer_section");

    photographers.forEach((photographer) => {
      const card = PhotographerCard(photographer);
      photographerSection.appendChild(card);
    });
    return photographerSection;
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
  function createPhotographerPage(photographer, media) {
    const main = document.querySelector("#main");

    const header = Header();
    main.appendChild(header);

    const photographerHeader = PhotographHeader(photographer);
    main.appendChild(photographerHeader);

    const sortBy = SortBy(media);
    main.appendChild(sortBy);

    const gallery = PhotographGalleryGallery(media);
    main.appendChild(gallery);

    const likesFooter = LikesFooterPrice(media);
    main.appendChild(likesFooter);
  }
  // //form for contact//
  // export function callModal() {
  //   const modal = document.createElement("contact_modal");
  //   modal.style.display = "block";
  //   modal.classList.add("modal");
  // }

  // export function closeModal() {
  //   const modal = document.getElementById("contact_modal");
  //   modal.style.display = "none";
  // }

  // export function closeModalByEsc() {
  //   document.addEventListener("keydown", function (event) {
  //     if (event.key === "Escape") {
  //       closeModal;
  //     }
  //   });
  // }

  return {
    createPhotoGalleryContent,
    createPhotographersAvatar: createBrowsePhotographers,
    createHomePage,
    createPhotographerPage,
  };
}
