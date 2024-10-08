import { LightBox } from "./LightBox.js";
// import { updateLightboxContent } from "./LightBox.js";
import { trapFocus } from "../utils/focusTrapping.js";
import { createMediaElement } from "../factory/galleryFactory.js"; // Importation de la fonction de vérification

/// function to build layout to the gallery photographer
export function PhotographGallery(photographer, photographerMedia) {
  const gallery = document.createElement("section");
  gallery.classList.add("image-container");

  // Itérer sur chaque média du tableau de l'api
  photographerMedia.forEach((media) => {
    // Créer une nouvelle section pour chaque média
    const galleryCard = document.createElement("article");
    galleryCard.classList.add(`gallery_card_${media.id}`);

    // Utiliser la fonction externe pour créer l'élément média
    const mediaLink = createMediaElement(photographer, media);

    // Ajouter la logique de lien (si elle est requise)
    mediaLink.href = `assets/images/${photographer.name}/${
      media.image || media.video
    }`;

    // section pour la description et les likes
    const description = document.createElement("section");
    description.classList.add("description");

    const mediaTitle = document.createElement("h4");
    mediaTitle.textContent = media.title;

    const mediaLikes = document.createElement("p");
    mediaLikes.classList.add("like_box");

    const mediaLikesCount = document.createElement("p");
    mediaLikesCount.textContent = media.likes;
    mediaLikesCount.classList.add("likes_count");

    const likeButton = document.createElement("button");
    likeButton.id = "likeButton";
    likeButton.setAttribute(
      "aria-label",
      `Likes icon with actual ${media.likes}`
    );

    const likeIcon = document.createElement("i");
    likeIcon.classList.add("fa-solid", "fa-heart", "full--heart");

    // Ajouter l'événement de clic pour le bouton like
    let hasLiked = false;
    likeButton.addEventListener("click", () => {
      if (!hasLiked) {
        media.likes++; // Augmenter le nombre de likes
        mediaLikesCount.textContent = media.likes; // Mettre à jour l'affichage
        hasLiked = true;

        const likeEvent = new CustomEvent("mediaLiked", {
          detail: { mediaLikes: 1 },
        });
        document.dispatchEvent(likeEvent); // Déclencher l'événement
      } else {
        media.likes--; // Diminuer le nombre de likes
        mediaLikesCount.textContent = media.likes; // Mettre à jour l'affichage
        hasLiked = false;

        const unlikeEvent = new CustomEvent("mediaLiked", {
          detail: { mediaLikes: -1 },
        });
        document.dispatchEvent(unlikeEvent); // Déclencher l'événement
      }
    });

    // Ajouter l'événement pour ouvrir la lightbox
    mediaLink.addEventListener("click", (event) => {
      const activeIndex = event.currentTarget.getAttribute("active-index");

      // Ouvrir la lightbox avec l'activeIndex actuel
      const lightbox = LightBox(photographer, photographerMedia, activeIndex);

      // Empêcher le comportement par défaut
      event.preventDefault();

      trapFocus(lightbox);
    });

    gallery.appendChild(galleryCard);
    galleryCard.appendChild(mediaLink);
    galleryCard.appendChild(description);
    description.appendChild(mediaTitle);
    description.appendChild(mediaLikes);
    mediaLikes.appendChild(mediaLikesCount);
    mediaLikes.appendChild(likeButton);
    likeButton.appendChild(likeIcon);
  });

  return gallery;
}
