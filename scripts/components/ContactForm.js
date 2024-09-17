import { validateForm } from "../utils/validateForm.js";
//Function for the contact modal

export function ContactForm(photographer) {
  // Sélection des éléments de la modale
  const formWrapper = document.createElement("div");
  formWrapper.classList.add("form_wrapper");

  const titleForm = document.createElement("div");
  titleForm.classList.add("title_form");

  const name = document.createElement("h2");
  name.innerHTML = `Contactez-moi<br>${photographer.name}`;

  const closeButton = document.createElement("button");
  closeButton.classList.add("btn-close");
  closeButton.textContent = "X";

  // Fermer le formulaire en cliquant sur le "X"
  closeButton.addEventListener("click", () => {
    const formWrapper = document.querySelector(".form_wrapper");
    const form = formWrapper.querySelector("form");
    formWrapper.style.display = "none"; // Masque le formulaire
    form.reset(); //reinitialisation du formulaire
  });

  // Sélection du formulaire
  const form = document.createElement("form");
  form.noValidate = true;

  // Créez les div contenant les labels et les inputs
  const formDataFirst = document.createElement("div");
  formDataFirst.classList.add("form_data");

  const labelFirst = document.createElement("label");
  labelFirst.setAttribute("for", "first");
  labelFirst.textContent = "Prénom";

  const inputFirst = document.createElement("input");
  inputFirst.type = "text";
  inputFirst.id = "first";
  inputFirst.name = "first";
  inputFirst.className = "text-control";

  const formDataLast = document.createElement("div");
  formDataLast.classList.add("form_data");

  const labelLast = document.createElement("label");
  labelLast.setAttribute("for", "last");
  labelLast.textContent = "Nom";

  const inputLast = document.createElement("input");
  inputLast.type = "text";
  inputLast.id = "last";
  inputLast.name = "last";
  inputLast.className = "text-control";

  const formDataEmail = document.createElement("div");
  formDataEmail.classList.add("form_data");

  const labelEmail = document.createElement("label");
  labelEmail.setAttribute("for", "email");
  labelEmail.textContent = "Email";

  const inputEmail = document.createElement("input");
  inputEmail.type = "text";
  inputEmail.id = "email";
  inputEmail.name = "email";
  inputEmail.className = "text-control";

  const formDataMessage = document.createElement("div");
  formDataMessage.classList.add("form_data");

  const labelMessage = document.createElement("label");
  labelMessage.setAttribute("for", "message");
  labelMessage.textContent = "Message";

  const inputMessage = document.createElement("textarea");
  inputMessage.id = "message";
  inputMessage.name = "message";
  inputMessage.className = "text-control";

  const submitButton = document.createElement("button");
  submitButton.className = "btn_submit btn";
  submitButton.type = "submit";
  submitButton.value = "Submit Form";
  submitButton.textContent = "Envoyer";

  // Validation et soumission du formulaire
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche l'envoi par défaut
    const isValid = validateForm(event, "submit");

    if (isValid) {
      console.log("Le formulaire est valide et est soumis !");
      formWrapper.style.display = "none"; // Fermer le formulaire après soumission réussie
      form.reset(); // Réinitialiser le formulaire après soumission
    } else {
      console.error("Le formulaire contient des erreurs.");
    }
  });
  // // Validation en temps réel lors de la saisie
  // form.addEventListener("input", (event) => validateForm(event, "input"));

  //mise en forme
  formWrapper.appendChild(titleForm);
  titleForm.appendChild(name);
  titleForm.appendChild(closeButton);
  formWrapper.appendChild(form);
  form.appendChild(formDataFirst);
  formDataFirst.appendChild(labelFirst);
  formDataFirst.appendChild(inputFirst);
  form.appendChild(formDataLast);
  formDataLast.appendChild(labelLast);
  formDataLast.appendChild(inputLast);
  form.appendChild(formDataEmail);
  formDataEmail.appendChild(labelEmail);
  formDataEmail.appendChild(inputEmail);
  form.appendChild(formDataMessage);
  formDataMessage.appendChild(labelMessage);
  formDataMessage.appendChild(inputMessage);
  form.appendChild(submitButton);

  return formWrapper;
}

// // Ouvrir/Fermer la modale de formulaire
// const contactMeButton = document.getElementById("contact_button");
// contactMeButton.forEach((btn) => {
//   btn.addEventListener("click", () => (formWrapper.style.display = "flex"));
// });
// modalClose.addEventListener(
//   "click",
//   () => (formWrapper.style.display = "none")
// );

// //Check if form are ok
// // Show error message
// const setErrorMessage = (element, message) => {
//   element.parentElement.setAttribute("data-error-visible", "true");
//   element.parentElement.setAttribute("data-error", message);
// };

// // Hide error message
// const hideErrorMessage = (element) => {
//   element.parentElement.removeAttribute("data-error-visible");
//   element.parentElement.removeAttribute("data-error");
// };

// // Check input value
// function checkInputValue(regex, element, message) {
//   if (!regex.test(element.value)) {
//     setErrorMessage(element, message);
//     return false;
//   }
//   hideErrorMessage(element);
//   return true;
// }
