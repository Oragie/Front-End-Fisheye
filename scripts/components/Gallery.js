import { getMediaPhotographerById } from "../api/api.js";
import { getPhotographers } from "../api/api.js";

// function to build layout to the gallery photographer
export function PhotographGallery(photographer) {
  const gallery = document.createElement("div");
  gallery.classList.add("gallery");

  // Itérer sur chaque média du tableau de l'api
  photographerMedia.forEach((id) => {
    // Créer une nouvelle section pour chaque média
    const galleryCard = document.createElement("div");
    galleryCard.classList.add(`gallery_card_${id}`);

    const mediaLink = document.createElement("a");
    mediaLink.href = `assets/images/${photographer.name}/${
      imgMedia || videoMedia
    }`;

    // Vérifiez le type de média pour décider de créer une image ou une vidéo
    if (media.type === "image") {
      const imgMedia = document.createElement("img");
      imgMedia.src = `assets/images/${photographer.name}/${media.image}`;
      imgMedia.alt = `${media.title}`;
      imgMedia.classList.add(`${media.id}`);

      galleryCard.appendChild(imgMedia);
    } else if (media.type === "video") {
      const videoMedia = document.createElement("video");
      videoMedia.title = `${media.title}`;
      videoMedia.classList.add("${media.id}");
      const source = document.createElement("source");
      source.src = `assets/images/${photographer.name}/${media.video}`;
      source.type = `${media.video.format}`;

      videoMedia.appendChild(source);
      galleryCard.appendChild(videoMedia);
    }

    const description = document.createElement("section")
    description.classList.add("description")

    const mediaTitle = document.createElement("h3");
    mediaTitle.textContent = `${media.title}`;

    const
  });
}
