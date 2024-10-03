export function LightBox(photographer, media, activeIndex) {
  console.log({ activeIndex });
  const main = document.querySelector("main");

  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox"); // Ajout de la classe "hidden"
  lightbox.id = "lightbox";

  const lightboxNav = document.createElement("section");
  lightboxNav.classList.add("lightbox_nav");

  const mediaBox = document.createElement("div");
  mediaBox.classList.add("media-box");

  const lightboxContent = document.createElement("div");
  lightboxContent.classList.add("lightbox-content");
  lightboxContent.id = "lightbox-content";

  // Bouton pour fermer la lightbox
  const closeButton = document.createElement("button");
  closeButton.classList.add("lightbox-close");
  closeButton.textContent = "X";
  closeButton.setAttribute("aria-label", `Close dialog`);

  /**==================> A Check */
  closeButton.addEventListener("click", () => {
    lightbox.remove(); // Fermer la lightbox en la supprimant du DOM
    // Rediriger le focus sur l'élément correspondant à activeIndex
    const mediaToFocus = document.querySelector(`.gallery_card_${activeIndex}`);
    if (mediaToFocus) {
      mediaToFocus.querySelector("button").focus(); // Mettre le focus sur le bouton du média correspondant
    } else {
      console.warn(`Impossible de trouver le média avec l'ID : ${activeIndex}`);
    }
  });
  /**=============== */

  // Ajouter la légende de l'image ou de la vidéo
  const lightboxTitle = document.createElement("h4");
  lightboxTitle.textContent = media.title;
  lightboxTitle.id = "lightbox_title";

  const prevButton = document.createElement("button");
  prevButton.classList.add("prev-btn");
  prevButton.id = "prev-btn";
  prevButton.textContent = "<";
  prevButton.setAttribute("aria-label", `Previous media`);

  const nextButton = document.createElement("button");
  nextButton.classList.add("next-btn");
  nextButton.id = "next-btn";
  nextButton.textContent = ">";
  prevButton.setAttribute("aria-label", `Next media`);

  //** */ ---------------------------------/
  // Remplacez la condition de vérification de activeIndex par le bon format
  if (activeIndex) {
    // Utiliser une boucle for pour trouver l'objet média correspondant à activeIndex
    let currentMediaIndex = -1; // Utilisez -1 par défaut pour vérifier si trouvé
    for (let i = 0; i < media.length; i++) {
      // Convertir activeIndex en nombre si nécessaire
      if (media[i].id === parseInt(activeIndex)) {
        // Vérifiez le type ici
        currentMediaIndex = media[i]; // Conservez l'objet média
        break; // On arrête la boucle une fois qu'on a trouvé l'élément
      }
    }

    // Appel initial pour afficher le média correspondant à activeIndex
    if (currentMediaIndex) {
      setTimeout(() => {
        updateLightboxContent(photographer, media[currentIndex]);
      }, 0);
      // Ici, utilisez l'objet actuel pour mettre à jour le contenu
      updateLightboxContent(photographer, currentMediaIndex);
    } else {
      console.error("Média introuvable pour l'ID :", activeIndex);
      return;
    }
  }

  //**----------------------------- */
  /** fonction pour vider la lighbox et la remplir avec le nouveau contenu lorsqu'on navigue */
  function updateLightboxContent(photographer, media) {
    const lightboxContent = document.getElementById("lightbox-content");
    const lightboxTitle = document.getElementById("lightbox_title");

    // Vérifier si l'élément existe dans le DOM
    if (!lightboxContent) {
      console.error("L'élément lightbox-content n'existe pas dans le DOM.");
      return;
    }

    console.log({ photographer, media });

    // Vider le contenu précédent
    lightboxContent.innerHTML = "";

    // Ajouter le nouveau média (image ou vidéo)
    if (media.image) {
      const img = document.createElement("img");
      img.src = `assets/images/${photographer.name}/${media.image}`;
      console.log("Image source:", img.src); // Ajoutez cette ligne pour déboguer
      img.alt = media.title;
      lightboxContent.appendChild(img);
    } else if (media.video) {
      const video = document.createElement("video");
      video.controls = true;
      const source = document.createElement("source");
      source.src = `assets/images/${photographer.name}/${media.video}`;
      console.log("Video source:", source.src); // Ajoutez cette ligne pour déboguer
      source.type = "video/mp4";
      video.appendChild(source);
      lightboxContent.appendChild(video);
    }

    // Mettre à jour le titre
    lightboxTitle.textContent = media.title;
    console.log("Lightbox Title:", lightboxTitle.textContent); // Vérifiez ici
  }

  //**----------------------------- */

  // ** Gestion des boutons Prev/Next ** maintenant que la lightbox est créée
  let currentIndex = media.findIndex(
    (item) => item.id === parseInt(activeIndex)
  ); // Trouver l'index

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + media.length) % media.length; // Gérer le retour circulaire
    updateLightboxContent(photographer, media[currentIndex]);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % media.length; // Gérer le retour circulaire
    updateLightboxContent(photographer, media[currentIndex]);
  });

  // Gestion de la navigation avec les touches du clavier
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      // Navigation vers la gauche
      currentIndex = (currentIndex - 1 + media.length) % media.length;
      updateLightboxContent(photographer, media[currentIndex]);
    } else if (event.key === "ArrowRight") {
      // Navigation vers la droite
      currentIndex = (currentIndex + 1) % media.length;
      updateLightboxContent(photographer, media[currentIndex]);
    } else if (event.key === "Escape") {
      // Fermer la lightbox avec la touche "Escape"
      closeButton.click();
    }
  });

  main.appendChild(lightbox);
  lightbox.appendChild(lightboxNav);
  lightboxNav.appendChild(prevButton);
  lightboxNav.appendChild(mediaBox);
  mediaBox.appendChild(lightboxContent);
  mediaBox.appendChild(lightboxTitle);
  lightboxNav.appendChild(closeButton);
  lightboxNav.appendChild(nextButton);

  // Une fois que tout est ajouté au DOM, mettez le focus sur un élément de la lightbox
  if (document.body.contains(lightbox)) {
    setTimeout(() => {
      closeButton.focus(); // Assurez-vous que le bouton close est focalisé
    }, 0);
  }

  console.log(
    "Lightbox content ajouté au DOM :",
    document.getElementById("lightbox-content")
  );

  return lightbox;
}
