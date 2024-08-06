// Fonction pour créer la navbar
export function createNavbar() {
  const navbar = document.createElement("header");
  navbar.innerHTML = `
      <a href="index.html">
        <img src="assets/images/logo.png" class="logo" alt="fisheye logo" />
      </a>
      <h1>Nos photographes</h1>
    `;
  return navbar;
}

// Exemple de données de photographes (à remplacer par les données réelles)
export const photographersData = [
  {
    name: "Ma data test",
    id: 1,
    city: "Paris",
    country: "France",
    tagline: "Ceci est ma data test",
    price: 400,
    portrait: "account.png",
  },
  {
    name: "Autre data test",
    id: 2,
    city: "Londres",
    country: "UK",
    tagline: "Ceci est ma data test 2",
    price: 500,
    portrait: "account.png",
  },
  // Ajoutez ici d'autres photographes si nécessaire
];

// Fonction pour créer le modèle de "card" de photographe
export function photographerTemplate(photographer) {
  return {
    getUserCardDOM() {
      const article = document.createElement("article");
      article.classList.add("photographer_card");
      article.innerHTML = `
          <img src="assets/images/${photographer.portrait}" alt="Photo de profil de ${photographer.name}" class="profile_image">
          <h2>${photographer.name}</h2>
          <p class="location">${photographer.city}, ${photographer.country}</p>
          <p class="tagline">${photographer.tagline}</p>
          <p class="price">${photographer.price}€/jour</p>
        `;
      return article;
    },
  };
}

// Fonction pour afficher les données des photographes
export function displayPhotographers(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  photographersSection.innerHTML = ""; // Clear existing content
  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}
