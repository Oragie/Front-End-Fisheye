/* 
Part 2 → The lightbox modal
*/

/*
  This object will contain ALL the useful informations to navigate between the different images
  Here's how it works:
  
  Direction → Used to know if the user clicked the previous or next image
  Actual Index → Index of the image in the modal that the user clicked 
  Next Index → Index of either the previous or next image, dependant on the Actual Index and the Direction
  */
const carouselInfo = {
  direction: 0,
  actualIndex: 0,
  nextIndex: 0,
};
//Function for the lightbox-carousel modal
const modalLightbox = document.querySelector(".lightbox__modal");
let imageUrl = "";
let imageFileName = "";
let postDescription = "";

function displayLightboxModal(e) {
  e.preventDefault();
  modalLightbox.classList.add("fade-in");
  modalLightbox.showModal();
  setTimeout(() => {
    modalLightbox.classList.remove("fade-in");
  }, 250);

  //This array contains the different image urls
  let arrayOfImageFileNames = photographerMediaArray.map((post) => {
    return post.image || post.video;
  });

  let arrayOfDescriptions = photographerMediaArray.map((post) => {
    return post.title;
  });

  //We give a value to our variables to get the URL, the file name and the description of the image
  imageUrl = e.currentTarget.children[0].getAttribute("src");
  imageFileName = imageUrl.split("/Posts photos/images/")[1]
    ? imageUrl.split("/Posts photos/images/")[1]
    : imageUrl.split("/Posts photos/videos/")[1];

  postDescription = e.currentTarget.getAttribute("title");

  updateModalImage(imageFileName, postDescription);
  //
  const nextButton = modalLightbox.querySelector(".lightbox__button-next"); //Key code = 37 → ArrowLeft
  const previousButton = modalLightbox.querySelector(
    ".lightbox__button-previous"
  ); //Key code = 39 → ArrowRight

  const navigateImagesInModal = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      //If the user hit a key to change image on the modal
      changeImage(
        arrayOfImageFileNames,
        imageFileName,
        event.key,
        arrayOfDescriptions
      );
    } else {
      changeImage(
        arrayOfImageFileNames,
        imageFileName,
        event,
        arrayOfDescriptions
      );
    }
  };

  window.addEventListener("keydown", navigateImagesInModal);
  nextButton.addEventListener("click", navigateImagesInModal);
  previousButton.addEventListener("click", navigateImagesInModal);

  //
  const closeModalButton = modalLightbox.querySelector(
    ".lightbox__button-close-dialog"
  );

  const closeModalAndRemoveEventListeners = () => {
    window.removeEventListener("keydown", navigateImagesInModal);
    nextButton.removeEventListener("click", navigateImagesInModal);
    previousButton.removeEventListener("click", navigateImagesInModal);
    closeModalFadeOut(modalLightbox);
  };
  closeModalButton.addEventListener("click", closeModalAndRemoveEventListeners);
}

//Function that closes the modal window with a fade out animation
function closeModalFadeOut(modal) {
  modal.classList.add("fade-out");
  setTimeout(() => {
    modal.classList.remove("fade-out");
    modal.close();
  }, 250);
}

//Function that changes the image displayed in the modal window of the lightbox
function changeImage(
  arrayOfImageFileNames,
  currentImageFileName,
  event,
  arrayOfDescriptions
) {
  carouselInfo.actualIndex =
    arrayOfImageFileNames.indexOf(currentImageFileName);
  if (typeof event !== "string") {
    carouselInfo.direction = event.currentTarget.children[0].classList.contains(
      "fa-chevron-left"
    )
      ? -1
      : 1;
  } else {
    carouselInfo.direction = event.includes("ArrowLeft") ? -1 : 1;
  }

  let userClicksNextOnLastImage =
    carouselInfo.direction + carouselInfo.actualIndex >
    arrayOfImageFileNames.length - 1;

  let userClicksPreviousOnFirstImage =
    carouselInfo.direction + carouselInfo.actualIndex < 0;

  if (userClicksNextOnLastImage) {
    carouselInfo.nextIndex = 0;
  } else if (userClicksPreviousOnFirstImage) {
    carouselInfo.nextIndex = arrayOfImageFileNames.length - 1;
  } else {
    carouselInfo.nextIndex = carouselInfo.direction + carouselInfo.actualIndex;
  }

  let nextImageFileName = arrayOfImageFileNames[carouselInfo.nextIndex];
  let nextPostDescription = arrayOfImageFileNames[carouselInfo.nextIndex];

  imageFileName = nextImageFileName;
  postDescription = nextPostDescription;

  updateModalImage(
    arrayOfImageFileNames[carouselInfo.nextIndex],
    arrayOfDescriptions[carouselInfo.nextIndex]
  );
}

//Updates the UI of the modal
function updateModalImage(newImageFileName, newPostDescription) {
  const imageElement = document.querySelector(".lightbox__image");
  const videoElement = document.querySelector(".lightbox__video");
  const imageDescriptionElement = document.querySelector(
    ".lightbox__post-description"
  );
  let fileIsAPhotography = newImageFileName.includes(".jpg");

  if (fileIsAPhotography) {
    //Element to be hidden
    videoElement.classList.add("hide");
    //Element to be added
    imageElement.classList.remove("hide");
    imageElement.setAttribute("alt", `Photo nommée '${newPostDescription}'`);
    imageElement.setAttribute(
      "src",
      `../assets/images/Posts photos/images/${newImageFileName}`
    );
  } else {
    //Element to be hidden
    imageElement.classList.add("hide");
    //Element to be added
    videoElement.classList.remove("hide");
    videoElement.setAttribute("alt", `Vidéo nommée '${newPostDescription}'`);
    videoElement.setAttribute(
      "src",
      `../assets/images/Posts photos/videos/${newImageFileName}`
    );
  }

  imageDescriptionElement.textContent = newPostDescription;
}
