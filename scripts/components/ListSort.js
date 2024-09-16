// ListSort.js - Composant pour trier la liste
export function SortBy() {
  const sortBy = document.createElement("div");
  sortBy.classList.add("sortBy");

  const selectedOption = document.createElement("div");
  selectedOption.classList.add("dropdown-selected");
  selectedOption.textContent = "Trier par"; // Affiche "Trier par" par défaut

  const dropdownMenu = document.createElement("ul");
  dropdownMenu.classList.add("dropdown-menu");

  const popularityLi = document.createElement("li");
  popularityLi.classList.add("popularityLi");
  popularityLi.textContent = "Popularité";

  const dateLi = document.createElement("li");
  dateLi.classList.add("dateLi");
  dateLi.textContent = "Date";

  const titleLi = document.createElement("li");
  titleLi.classList.add("titleLi");
  titleLi.textContent = "Titre";

  // Ajouter les éléments à la liste déroulante
  dropdownMenu.appendChild(popularityLi);
  dropdownMenu.appendChild(dateLi);
  dropdownMenu.appendChild(titleLi);

  // Ajouter les éléments au conteneur principal
  sortBy.appendChild(selectedOption);
  sortBy.appendChild(dropdownMenu);

  // Ajouter un événement de clic pour ouvrir/fermer la liste déroulante
  selectedOption.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });

  // Ajouter un événement de clic pour sélectionner un élément
  dropdownMenu.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      selectedOption.textContent = item.textContent; // Met à jour l'option sélectionnée
      dropdownMenu.classList.remove("show"); // Ferme la liste déroulante
    });
  });

  return sortBy;
}
