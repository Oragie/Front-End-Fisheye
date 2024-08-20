import { callModal } from "../components/ContactForm";
import { closeModal } from "../components/ContactForm";
import { closeModalByEsc } from "../components/ContactForm";

closeModalByEsc();

function submitForm() {
  const isValid = validateFirstName() && validateLastName && validateMail;
}
