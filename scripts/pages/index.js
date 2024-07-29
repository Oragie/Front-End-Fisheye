document.addEventListener("DOMContentLoaded", () => {
  // Récupération des données JSON
  fetch("../../data/photographers.json")
    //   On utilise fetch pour obtenir le contenu du fichier JSON (json simule un serveur et fetch est une requete).
    .then((response) => response.json())
    // 'response.json() convertit la réponse en un objet JSON.
    .then((data) => {
      // Initialisation des photographes et médias
      const photographers = data.photographers;
      const media = data.media;

      // Calcul des likes par photographe
      photographers.forEach((photographer) => {
        const photographerMedia = media.filter(
          (item) => item.photographerId === photographer.id
        );
        // Pour chaque photographe, on filtre les médias pour obtenir ceux qui lui appartiennent.
        photographer.totalLikes = photographerMedia.reduce(
          (sum, item) => sum + item.likes,
          0
        );
        // On calcule le nombre total de likes de ces médias et on l'assigne au photographe.
      });

      // Tri des photographes par nombre de likes décroissant
      photographers.sort((a, b) => b.totalLikes - a.totalLikes);
      //   Les photographes sont triés en fonction de leur nombre total de likes de manière décroissante.

      // Création des "cards" pour chaque photographe
      const photographerSection = document.querySelector(
        ".photographer_section"
      );
      photographers.forEach((photographer) => {
        const card = document.createElement("div");
        card.classList.add("photographer_card");

        // Création de l'image de profil
        const profileImage = document.createElement("img");
        profileImage.src = `assets/photographers/${photographer.portrait}`;
        profileImage.alt = `Photo de profil de ${photographer.name}`;
        profileImage.classList.add("profile_image");

        // Création du nom du photographe
        const name = document.createElement("h2");
        name.textContent = photographer.name;

        // Création de la localisation
        const location = document.createElement("p");
        location.textContent = `${photographer.city}, ${photographer.country}`;
        location.classList.add("location");

        // Création de la tagline
        const tagline = document.createElement("p");
        tagline.textContent = photographer.tagline;
        tagline.classList.add("tagline");

        // Création du tarif
        const price = document.createElement("p");
        price.textContent = `${photographer.price}€/jour`;
        price.classList.add("price");

        // Ajout des éléments à la carte
        card.appendChild(profileImage);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(tagline);
        card.appendChild(price);

        // Ajout de la carte à la section des photographes
        photographerSection.appendChild(card);
      });
    })
    .catch((error) =>
      console.error("Erreur lors de la récupération des données:", error)
    );
});
