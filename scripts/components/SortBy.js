export function SortBy(photographerMedia, updateGallery) {
  const sortBy = document.createElement("div");
  sortBy.classList.add("sortBy");

  const textH2 = document.createElement("h3");
  textH2.textContent = "Trier par";

  const dropdownWrapper = document.createElement("div");
  dropdownWrapper.classList.add("sortByDropdown");

  const dropdownButton = document.createElement("button");
  let currentSelection = "Popularité"; // Valeur initiale
  dropdownButton.textContent = currentSelection;
  dropdownButton.id = "selector";
  dropdownButton.setAttribute("aria-label", `Order by ${currentSelection}`); // Description dynamique
  dropdownButton.setAttribute("aria-expanded", "false"); // Indiquer que le menu est initialement fermé
  dropdownButton.setAttribute("aria-haspopup", "listbox"); // Indiquer qu'il s'agit d'un menu

  const dropdownContent = document.createElement("ul");
  dropdownContent.classList.add("dropdownContent");
  dropdownContent.setAttribute("role", "listbox"); // Indiquer que c'est une liste d'options

  const options = ["Popularité", "Date", "Titre"];

  //-----------------------------------
  // Fonction pour trier les médias en fonction de l'option sélectionnée
  function sortMedia() {
    let sortedMedia = [...photographerMedia];

    if (currentSelection === "Popularité") {
      sortedMedia.sort((a, b) => b.likes - a.likes);
    } else if (currentSelection === "Date") {
      sortedMedia.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (currentSelection === "Titre") {
      sortedMedia.sort((a, b) => a.title.localeCompare(b.title));
    }

    console.log(`Tri par ${currentSelection}`, sortedMedia); // Vérifier les médias triés
    return sortedMedia;
  }
  //------------------------------------

  // Fonction pour mettre à jour la liste d'options sans répéter l'option sélectionnée
  function updateDropdownContent() {
    dropdownContent.innerHTML = ""; // Réinitialiser le contenu

    // Ajouter un séparateur avant le premier élément visible dans le menu déroulant
    if (options.length > 1) {
      const firstSeparator = document.createElement("div");
      firstSeparator.classList.add("dropdownSeparator");
      dropdownContent.appendChild(firstSeparator);
    }

    options.forEach((option) => {
      if (option !== currentSelection) {
        // Créer un bouton pour chaque option
        const buttonLi = document.createElement("button");
        buttonLi.id = `buttonLi-${option}`;
        buttonLi.textContent = option;
        buttonLi.setAttribute("role", "option");
        buttonLi.setAttribute("aria-label", `Trier par ${option}`); // Description pour les utilisateurs

        buttonLi.addEventListener("click", () => {
          currentSelection = option; // Met à jour la sélection actuelle
          dropdownButton.textContent = currentSelection; // Met à jour le texte du bouton
          dropdownButton.setAttribute(
            "aria-label",
            `Trier par ${currentSelection}`
          ); // Mettre à jour le label du bouton
          dropdownWrapper.classList.remove("active"); // Ferme le menu déroulant
          dropdownButton.setAttribute("aria-expanded", "false"); // Indiquer que le menu est fermé

          // Trier et mettre à jour la galerie
          const sortedMedia = sortMedia();
          updateGallery(sortedMedia); // Mettre à jour la galerie
        });

        dropdownContent.appendChild(buttonLi);

        // Ajouter un séparateur entre les options sauf après le dernier élément
        if (option !== options[options.length - 1]) {
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
