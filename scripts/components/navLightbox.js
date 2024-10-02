// ** Gestion des boutons Prev/Next ** maintenant que la lightbox est créée
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

prevButton.addEventListener("click", () => {
  currentMediaIndex =
    (currentMediaIndex - 1 + mediaArray.length) % mediaArray.length; // Boucle sur le tableau
  updateLightboxContent(mediaArray[currentMediaIndex], photographer);
});

nextButton.addEventListener("click", () => {
  currentMediaIndex = (currentMediaIndex + 1) % mediaArray.length; // Boucle sur le tableau
  updateLightboxContent(mediaArray[currentMediaIndex], photographer);
});
