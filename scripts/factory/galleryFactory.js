export function createMediaElement(photographer, media) {
  const mediaLink = document.createElement("button");
  mediaLink.id = "gallery_mediaLink";
  mediaLink.setAttribute("aria-label", `${media.title}`);
  mediaLink.setAttribute("active-index", media.id);

  // Vérifiez le type de média pour créer soit une image soit une vidéo
  if (media.image) {
    const imgMedia = document.createElement("img");
    imgMedia.src = `assets/images/${photographer.name}/${media.image}`;
    imgMedia.alt = `${media.title}`;
    imgMedia.classList.add(`${media.id}`);
    mediaLink.href = `assets/images/${photographer.name}/${media.image}`;
    mediaLink.appendChild(imgMedia);
  } else if (media.video) {
    const videoMedia = document.createElement("video");
    videoMedia.title = `${media.title}`;
    videoMedia.classList.add(`${media.id}`);
    const source = document.createElement("source");
    source.src = `assets/images/${photographer.name}/${media.video}`;
    source.type = "video/mp4";
    mediaLink.href = `assets/images/${photographer.name}/${media.video}`;
    videoMedia.appendChild(source);
    mediaLink.appendChild(videoMedia);
  }

  return mediaLink;
}
