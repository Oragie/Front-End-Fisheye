import { ContactForm } from "./ContactForm.js";

// function to build layout to the photographer Profil
export function PhotographHeader(photographer) {
  const photographerHeader = document.createElement("div");
  photographerHeader.classList.add("photograph-header");

  const profilPhotographer = document.createElement("div");
  profilPhotographer.classList.add("text_content");

  const name = document.createElement("h2");
  name.textContent = photographer.name;

  const location = document.createElement("p");
  location.textContent = `${photographer.city}, ${photographer.country}`;
  location.classList.add("location");

  const tagline = document.createElement("p");
  tagline.textContent = photographer.tagline;
  tagline.classList.add("tagline");

  const contactMe = document.createElement("button");
  contactMe.classList.add("contact_button");
  contactMe.name = "contact Me";
  contactMe.textContent = "Contactez-moi";

  //ouverture du modal
  contactMe.addEventListener("click", () => {
    const formWrapper = document.querySelector(".form_wrapper");
    formWrapper.style.display = "flex";
  });
  //addvevent

  const profileImage = document.createElement("img");
  profileImage.src = `assets/photographers/${photographer.portrait}`;
  profileImage.alt = `Photo de profil de ${photographer.name}`;
  profileImage.classList.add("profile_image");

  photographerHeader.appendChild(profilPhotographer);
  profilPhotographer.appendChild(name);
  profilPhotographer.appendChild(location);
  profilPhotographer.appendChild(tagline);
  photographerHeader.appendChild(contactMe);
  photographerHeader.appendChild(profileImage);

  return photographerHeader;
}
