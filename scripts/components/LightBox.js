export function LightBox(photographer, photographerMedia) {
  // Créer la lightbox
  const lightBox = document.createElement("div");
  lightBox.classList.add("lightbox");

  const lightboxContent = document.createElement("div");
  lightboxContent.classList.add("lightbox-content");

  const lightBoxMedia = document.createElement("img"); // Peut être remplacé par une vidéo si nécessaire

  const lightBoxTitle = document.createElement("h3");
  lightBoxTitle.classList.add("lightbox-title");

  const closeButton = document.createElement("button");
  closeButton.classList.add("close-btn");
  closeButton.textContent = "×";

  const prevButton = document.createElement("button");
  prevButton.classList.add("prev-btn");
  prevButton.textContent = "←";

  const nextButton = document.createElement("button");
  nextButton.classList.add("next-btn");
  nextButton.textContent = "→";

  lightBox.appendChild(lightboxContent);
  lightboxContent.appendChild(lightBoxMedia);
  lightboxContent.appendChild(lightBoxTitle);
  lightboxContent.appendChild(closeButton);
  lightboxContent.appendChild(prevButton);
  lightboxContent.appendChild(nextButton);

  return lightBox;
}
