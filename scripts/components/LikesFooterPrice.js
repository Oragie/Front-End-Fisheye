// function to build layout to footer with like and price
export function LikesFooterPrice(photographer, photographerMedia) {
  // Créer le footer
  const footer = document.createElement("div");
  footer.classList.add("likes-footer");

  // Calculer le total des likes à partir des médias du photographe

  let totalLikes = 0; // Initialisation à 0

  // Itération sur chaque média et ajout des likes au total
  photographerMedia.forEach((media) => {
    totalLikes += media.likes;
  });

  console.log("Total des likes :", totalLikes);

  // Créer un élément pour afficher les likes
  const likesContainer = document.createElement("div");
  likesContainer.classList.add("likes-container");

  const likesCount = document.createElement("p");
  likesCount.textContent = totalLikes;
  likesCount.classList.add("likes-count");

  const likeIcon = document.createElement("i");
  likeIcon.classList.add("fa-solid", "fa-heart", "likes-heart");

  likesContainer.appendChild(likesCount);
  likesContainer.appendChild(likeIcon);

  // Créer un élément pour afficher le prix par jour du photographe
  const priceContainer = document.createElement("div");
  priceContainer.classList.add("price-container");

  const priceText = document.createElement("p");
  priceText.textContent = `${photographer.price}€ / jour`;
  priceText.classList.add("price");

  priceContainer.appendChild(priceText);

  // Ajouter les deux containers au footer
  footer.appendChild(likesContainer);
  footer.appendChild(priceContainer);

  return footer;
}
