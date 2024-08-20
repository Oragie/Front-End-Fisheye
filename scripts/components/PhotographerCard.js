// function to build layout to the photographer index profil
export function PhotographerCard(photographer) {
  const card = document.createElement("div");
  card.classList.add("photographer_card");

  const photographerPage = document.createElement("a");
  photographerPage.href = `photographer.html?id=${photographer.id}`;

  const profileImage = document.createElement("img");
  profileImage.src = `assets/photographers/${photographer.portrait}`;
  profileImage.alt = `Photo de profil de ${photographer.name}`;
  profileImage.classList.add("profile_image");

  const name = document.createElement("h2");
  name.textContent = photographer.name;

  const location = document.createElement("p");
  location.textContent = `${photographer.city}, ${photographer.country}`;
  location.classList.add("location");

  const tagline = document.createElement("p");
  tagline.textContent = photographer.tagline;
  tagline.classList.add("tagline");

  const price = document.createElement("p");
  price.textContent = `${photographer.price}€/jour`;
  price.classList.add("price");

  card.appendChild(profileImage);
  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(tagline);
  card.appendChild(price);
  card.appendChild(photographerPage);

  return card;
}
