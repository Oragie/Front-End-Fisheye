export function SortBy() {
  const sortBy = document.createElement("div");
  sortBy.classList.add("sortBy");

  const textH2 = document.createElement("h3");
  textH2.textContent = "Trier par";

  const dropdownWrapper = document.createElement("div");
  dropdownWrapper.classList.add("sortByDropdown");

  const dropdownButton = document.createElement("button");
  let currentSelection = "Popularité"; // Valeur initiale
  dropdownButton.textContent = currentSelection;

  const dropdownContent = document.createElement("ul");
  dropdownContent.classList.add("dropdownContent");

  const options = ["Popularité", "Date", "Titre"];

  // Fonction pour mettre à jour la liste d'options sans répéter l'option sélectionnée
  function updateDropdownContent() {
    dropdownContent.innerHTML = ""; // Réinitialiser le contenu

    // Ajouter un séparateur avant le premier élément visible dans le menu déroulant
    if (options.length > 1) {
      const firstSeparator = document.createElement("div");
      firstSeparator.classList.add("dropdownSeparator");
      dropdownContent.appendChild(firstSeparator);
    }

    options.forEach((option, index) => {
      if (option !== currentSelection) {
        // Ne pas afficher l'option sélectionnée
        const li = document.createElement("li");
        li.textContent = option;

        li.addEventListener("click", () => {
          currentSelection = option; // Met à jour la sélection actuelle
          dropdownButton.textContent = currentSelection; // Met à jour le texte du bouton
          dropdownWrapper.classList.remove("active"); // Ferme le menu déroulant
        });

        dropdownContent.appendChild(li);

        // Ajouter un trait blanc de séparation sauf après le dernier élément visible
        if (
          index < options.length - 2 ||
          (index === options.length - 2 &&
            options[options.length - 1] !== currentSelection)
        ) {
          const separator = document.createElement("div");
          separator.classList.add("dropdownSeparator");
          dropdownContent.appendChild(separator);
        }
      }
    });
  }

  // Initialiser le contenu du menu déroulant
  updateDropdownContent();

  dropdownButton.addEventListener("click", () => {
    dropdownWrapper.classList.toggle("active"); // Ouvre/Ferme le menu
    updateDropdownContent(); // Met à jour le menu déroulant chaque fois qu'on clique dessus
  });

  dropdownWrapper.appendChild(dropdownButton);
  dropdownWrapper.appendChild(dropdownContent);
  sortBy.appendChild(textH2);
  sortBy.appendChild(dropdownWrapper);

  return sortBy;
}
