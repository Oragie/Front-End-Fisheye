//form for contact//
export function callModal() {
  const modal = document.createElement("contact_modal");
  modal.styledisplay = "block";
  modal.classList.add("modal");
}

export function closeModal() {
  const modal = document.querySelector("contact_modal");
  modal.styledisplay = "none";
}

export function closeModalByEsc() {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal;
    }
  });
}
