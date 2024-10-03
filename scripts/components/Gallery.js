import { LightBox } from "./LightBox.js";
// import { updateLightboxContent } from "./LightBox.js";
import { trapFocus } from "../utils/focusTrapping.js";

// function to build layout to the gallery photographer
export function PhotographGallery(photographer, photographerMedia) {
  const gallery = document.createElement("div");
  gallery.classList.add("image-container");

  // Itérer sur chaque média du tableau de l'api
  photographerMedia.forEach((media) => {
    // Créer une nouvelle section pour chaque média
    const galleryCard = document.createElement("div");
    galleryCard.classList.add(`gallery_card_${media.id}`);

    const mediaLink = document.createElement("button");
    mediaLink.id = "gallery_mediaLink";
    mediaLink.setAttribute("aria-label", `${media.title}`); // Description dynamique

    mediaLink.setAttribute("active-index", media.id);

    // Vérifiez le type de média pour décider de créer une image ou une vidéo
    if (media.image) {
      const imgMedia = document.createElement("img");
      imgMedia.src = `assets/images/${photographer.name}/${media.image}`;
      imgMedia.alt = `${media.title}`;
      imgMedia.classList.add(`${media.id}`);
      mediaLink.appendChild(imgMedia);
    } else if (media.video) {
      const videoMedia = document.createElement("video");
      videoMedia.title = `${media.title}`;
      videoMedia.classList.add("${media.id}");
      const source = document.createElement("source");
      source.src = `assets/images/${photographer.name}/${media.video}`;
      source.type = `video/mp4`;

      videoMedia.appendChild(source);
      mediaLink.appendChild(videoMedia);
    }

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
    ); // Description dynamique

    const likeIcon = document.createElement("i");
    likeIcon.classList.add("fa-solid", "fa-heart", "full--heart");

    //** */ Ajouter l'événement de clic pour le bouton like

    let hasLiked = false; // Pour éviter les multiples clics
    likeButton.addEventListener("click", () => {
      if (!hasLiked) {
        media.likes++; // Augmenter le nombre de likes pour ce média
        mediaLikesCount.textContent = media.likes; // Mettre à jour l'affichage
        hasLiked = true; // Marquer que le like a été ajouté

        // ** Déclencher l'événement Custom avec l'ajout d'un like **
        const likeEvent = new CustomEvent("mediaLiked", {
          detail: { mediaLikes: 1 }, // Incrémenter de 1
        });
        document.dispatchEvent(likeEvent); // Déclencher l'événement
      } else {
        media.likes--; // Diminuer le nombre de likes pour ce média
        mediaLikesCount.textContent = media.likes; // Mettre à jour l'affichage
        hasLiked = false; // Marquer que le like a été retiré

        // ** Déclencher l'événement Custom avec le retrait d'un like **
        const unlikeEvent = new CustomEvent("mediaLiked", {
          detail: { mediaLikes: -1 }, // Décrémenter de 1
        });
        document.dispatchEvent(unlikeEvent); // Déclencher l'événement
      }
    });

    let lastFocusedElement = document.activeElement; // Stocker l'élément qui a le focus actuellement

    // ** Ajout de l'événement pour ouvrir la lightbox **
    mediaLink.addEventListener("click", (event) => {
      const activeIndex = event.currentTarget.getAttribute("active-index");

      // Ouvrir la lightbox avec l'activeIndex actuel
      LightBox(photographer, photographerMedia, activeIndex);

      // Empêcher le comportement par défaut (si nécessaire)
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
