import { getPhotographers } from "../api/api.js";
import { getMediaPhotographerById } from "../api/api.js";
import { ValidateForm } from "../components/ValidateForm.js";
import { photographerTemplate } from "../templates/photographer.js";

// fonction to "get" photographer ID de l'URL
function getPhotographerIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

// fonction pour appeler l'api et le template pour photographer.html
async function init() {
  const photographerId = getPhotographerIdFromUrl();

  if (photographerId) {
    const photographers = await getPhotographers();
    const photographer = photographers.find((p) => p.id == photographerId);

    if (photographer) {
      const photographerMedia = await getMediaPhotographerById(photographerId);
      const { createPhotographerPage } = photographerTemplate();

      createPhotographerPage(photographer, photographerMedia);

      //----------------------------------------------
      // let currentMediaIndex = 0;

      // // Fonction pour afficher le média dans la lightbox
      // function showLightbox(media, index) {
      //   currentMediaIndex = index;
      //   if (media.image) {
      //     lightboxMedia.src = `assets/images/${photographer.name}/${media.image}`;
      //     lightboxMedia.tagName.toLowerCase() !== "img" &&
      //       lightboxMedia.replaceWith(document.createElement("img"));
      //     lightboxMedia.alt = media.title;
      //   } else if (media.video) {
      //     const video = document.createElement("video");
      //     video.controls = true;
      //     const source = document.createElement("source");
      //     source.src = `assets/images/${photographer.name}/${media.video}`;
      //     source.type = "video/mp4";
      //     video.appendChild(source);
      //     lightboxMedia.replaceWith(video);
      //     lightboxMedia = video;
      //   }
      //   lightboxTitle.textContent = media.title;
      //   lightbox.classList.add("active");
      // }

      // // Fonction pour fermer la lightbox
      // function closeLightbox() {
      //   lightbox.classList.remove("active");
      // }

      // // Fonction pour passer au média précédent
      // function showPrevious() {
      //   if (currentMediaIndex > 0) {
      //     showLightbox(
      //       photographerMedia[currentMediaIndex - 1],
      //       currentMediaIndex - 1
      //     );
      //   }
      // }

      // // Fonction pour passer au média suivant
      // function showNext() {
      //   if (currentMediaIndex < photographerMedia.length - 1) {
      //     showLightbox(
      //       photographerMedia[currentMediaIndex + 1],
      //       currentMediaIndex + 1
      //     );
      //   }
      // }

      // // Ajout des événements pour les boutons de navigation et de fermeture
      // closeButton.addEventListener("click", closeLightbox);
      // prevButton.addEventListener("click", showPrevious);
      // nextButton.addEventListener("click", showNext);

      //-----------------------------------------------
      // Ajoute l'écouteur d'événement après l'injection du contenu
      const contactMeButton = document.querySelector(".contact_button");
      const formWrapper = document.querySelector(".form_wrapper");
      const closeButton = document.querySelector(".btn-close");
      const form = formWrapper.querySelector("form");

      if (contactMeButton && formWrapper) {
        //ouverture du modal
        contactMeButton.addEventListener("click", () => {
          formWrapper.style.display = "flex";
        });
        // Fermer le formulaire en cliquant sur le "X"
        closeButton.addEventListener("click", () => {
          formWrapper.style.display = "none"; // Masque le formulaire
          form.reset(); //reinitialisation du formulaire
        });
        // Appel de la fonction de validation
        // Validation et soumission du formulaire
        form.addEventListener("submit", (event) => {
          event.preventDefault(); // Empêche l'envoi par défaut
          const isValid = ValidateForm(event, "submit");

          if (isValid) {
            console.log("Le formulaire est valide et est soumis !");
            formWrapper.style.display = "none"; // Fermer le formulaire après soumission réussie
            form.reset(); // Réinitialiser le formulaire après soumission
          } else {
            console.error("Le formulaire contient des erreurs.");
          }
        });
        // Validation en temps réel lors de la saisie
        form.addEventListener("input", (event) => ValidateForm(event, "input"));
      } else {
        console.error("Le bouton ou le formulaire n'existe pas dans le DOM.");
      }
      //--------------------------------------
    } else {
      console.error(`aucun photographer avec cette id: ${photographerId}`);
    }
  } else {
    console.error("aucun photographer ID dans l'URL");
  }
}

init();
