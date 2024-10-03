// function to build layout to the photographer index profil
export function PhotographerCard(photographer) {
  const card = document.createElement("div");
  card.classList.add("photographer_card");

  // Create a link to the photographer's page
  const photographerLink = document.createElement("a");
  photographerLink.href = `photographer.html?id=${photographer.id}`;
  photographerLink.ariaLabel = photographer.name;

  const profileImage = document.createElement("img");
  profileImage.src = `assets/photographers/${photographer.portrait}`;
  profileImage.alt = `Photo de profil de ${photographer.name}`;
  profileImage.classList.add("profile_image");

  const name = document.createElement("h2");
  name.textContent = photographer.name;

  const cardTextContainer = document.createElement("div");
  cardTextContainer.classList.add("card_text-container");

  const location = document.createElement("p");
  location.textContent = `${photographer.city}, ${photographer.country}`;
  location.classList.add("location");

  const tagline = document.createElement("p");
  tagline.textContent = photographer.tagline;
  tagline.classList.add("tagline");

  const price = document.createElement("p");
  price.textContent = `${photographer.price}€/jour`;
  price.classList.add("price");

  card.appendChild(photographerLink); //link to photographer page
  photographerLink.appendChild(profileImage);
  photographerLink.appendChild(name);
  card.appendChild(cardTextContainer);
  cardTextContainer.appendChild(location);
  cardTextContainer.appendChild(tagline);
  cardTextContainer.appendChild(price);

  return card;
}
