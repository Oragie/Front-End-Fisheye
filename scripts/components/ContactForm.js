//form for contact//
export function callModal() {
  const modal = document.createElement("contact_modal");
  modal.style.display = "block";
  modal.classList.add("modal");
}

export function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

export function closeModalByEsc() {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal;
    }
  });
}
