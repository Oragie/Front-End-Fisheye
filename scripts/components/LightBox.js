export function LightBox(photographer, media) {
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");

  const lightboxContent = document.createElement("div");
  lightboxContent.classList.add("lightbox-content");

  // Bouton pour fermer la lightbox
  const closeButton = document.createElement("button");
  closeButton.classList.add("lightbox-close");
  closeButton.textContent = "X";
  closeButton.addEventListener("click", () => {
    lightbox.remove(); // Fermer la lightbox en la supprimant du DOM
  });

  // Vérifier si c'est une image ou une vidéo à afficher
  if (media.image) {
    const img = document.createElement("img");
    img.src = `assets/images/${photographer.name}/${media.image}`;
    img.alt = media.title;
    lightboxContent.appendChild(img);
  } else if (media.video) {
    const video = document.createElement("video");
    video.controls = true;
    const source = document.createElement("source");
    source.src = `assets/images/${photographer.name}/${media.video}`;
    source.type = "video/mp4";
    video.appendChild(source);
    lightboxContent.appendChild(video);
  }

  // Ajouter la légende de l'image ou de la vidéo
  const title = document.createElement("h2");
  title.textContent = media.title;
  lightboxContent.appendChild(title);

  lightbox.appendChild(lightboxContent);
  lightbox.appendChild(closeButton);

  document.body.appendChild(lightbox); // Ajouter la lightbox au body pour qu'elle soit visible

  return lightbox;
}
