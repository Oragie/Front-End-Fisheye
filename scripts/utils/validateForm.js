// Fonction de validation du formulaire
export function validateForm(event, type) {
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
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const regexMessage = /^.{1,600}$/;

  // Récupération des champs du formulaire
  const firstnameField = elements["first"];
  const lastnameField = elements["last"];
  const emailField = elements["email"];
  const messageField = elements["message"];

  // Show error message
  const setErrorMessage = (element, message) => {
    element.parentElement.setAttribute("data-error-visible", "true");
    element.parentElement.setAttribute("data-error", message);
  };
  // Hide error message
  const hideErrorMessage = (element) => {
    element.parentElement.removeAttribute("data-error-visible");
    element.parentElement.removeAttribute("data-error");
  };

  // Check input value
  function checkInputValue(regex, element, message) {
    if (!regex.test(element.value)) {
      setErrorMessage(element, message);
      return false;
    }
    hideErrorMessage(element);
    return true;
  }

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
    return true; //formulaire valide
  }
  return false; //formulaire non valide
}
