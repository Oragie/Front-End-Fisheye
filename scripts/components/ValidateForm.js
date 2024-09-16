// Fonction de validation du formulaire
export function validate(event, type) {
  event.preventDefault();
  if (!type)
    throw new Error("Type is required, choose between 'submit' or 'input'"); // Vérification du type d'événement

  let elements = null;
  if (type === "submit") {
    elements = event.target.elements; // Récupération des éléments du formulaire lors de la soumission
  } else {
    elements = event.target.form.elements; // Récupération des éléments du formulaire lors de l'entrée
  }

  // Messages d'erreur spécifiques
  const message = {
    name: "Saisir minimum 2 caractères, ne peut être vide.",
    email: "Veuillez entrer une adresse mail valide, ne peut être vide.",
    message: "Ne peut être vide. Vous pouvez saisir jusqu'à 600 caractères.",
  };

  // Regex pour valider les entrées
  const regexName = /^([A-Za-z|\s]{2,15})?([-]{0,1})?([A-Za-z|\s]{2,15})$/;
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const regexMessage = /^.{1,600}$/;

  // Récupération des champs du formulaire
  const firstnameField = elements["first"];
  const lastnameField = elements["last"];
  const emailField = elements["email"];
  const messageField = elements["message"];

  // Validation des différents champs

  const isMessageValid = checkInputValue(
    regexMessage,
    messageField,
    message.message
  );
  const isEmailValid = checkInputValue(regexEmail, emailField, message.email);
  const isLastNameValid = checkInputValue(
    regexName,
    lastnameField,
    message.name
  );
  const isFirstNameValid = checkInputValue(
    regexName,
    firstnameField,
    message.name
  );

  // Si toutes les conditions sont remplies lors de la soumission
  if (
    type === "submit" &&
    isMessageValid &&
    isEmailValid &&
    isLastNameValid &&
    isFirstNameValid
  ) {
    formWrapper.style.display = "none"; // Fermeture de la modale de formulaire
    modalSuccess.style.display = "flex"; // Affichage de la modale de succès
    form.reset(); // Réinitialisation du formulaire
  }
}

// Ajout des écouteurs d'événements pour la soumission et l'entrée du formulaire
form.addEventListener("submit", (event) => validate(event, "submit"));
form.addEventListener("input", (event) => validate(event, "input"));

// Fermeture de la modale de succès
document
  .querySelector(".modal_content button")
  .addEventListener("click", () => (modalSuccess.style.display = "none"));

//If ok new modal on screen to said Ok it's send !
const modalSuccess = document.createElement("div");
modalSuccess.className = "modal_success";

const modalContent = document.createElement("div");
modalContent.className = "modal_content";

const h2 = document.createElement("h2");
h2.textContent = "Merci c'est envoyé";

const closeButton = document.createElement("button");
closeButton.className = "btn";
closeButton.type = "button";
closeButton.setAttribute("aria-label", "close modal");
closeButton.textContent = "Fermer";

modalContent.appendChild(h2);
modalContent.appendChild(closeButton);
modalSuccess.appendChild(modalContent);
