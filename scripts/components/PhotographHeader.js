// function to build layout to the photographer gallery page
export function PhotographHeader(photographer) {
  const photographerHeader = document.getElementById("photograph-header");

  const textContent = document.createElement("div");
  textContent.classList.add("text_content");

  const name = document.createElement("h2");
  name.textContent = photographer.name;

  const location = document.createElement("p");
  location.textContent = `${photographer.city}, ${photographer.country}`;
  location.classList.add("location");

  const tagline = document.createElement("p");
  tagline.textContent = photographer.tagline;
  tagline.classList.add("tagline");

  const contactMe = document.getElementById("contact_button");

  const profileImage = document.createElement("img");
  profileImage.src = `assets/photographers/${photographer.portrait}`;
  profileImage.alt = `Photo de profil de ${photographer.name}`;
  profileImage.classList.add("profile_image");

  photographerHeader.appendChild(textContent);
  textContent.appendChild(name);
  textContent.appendChild(location);
  textContent.appendChild(tagline);
  photographerHeader.appendChild(contactMe);
  photographerHeader.appendChild(profileImage);

  return photographerHeader;
}
