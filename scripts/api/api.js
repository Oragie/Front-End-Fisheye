export async function getPhotographers() {
  try {
    const response = await fetch("../../data/photographers.json");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    return data.photographers;
  } catch (error) {
    console.error("Fetch error: ", error);
    return [];
  }
}
export async function getMediaPhotographerById(id) {
  try {
    const response = await fetch("../../data/photographers.json");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    // const photographerMedia = data.media.filter(
    //   (element) => element.photographerId === id
    // );
    // si remplacé par boucle for :

    const photographerMedia = []; // Initialisation du tableau vide

    for (let i = 0; i < data.media.length; i++) {
      const element = data.media[i];
      if (element.photographerId === id) {
        photographerMedia.push(element); // Ajout de l'élément au
      }
    }

    return photographerMedia;
  } catch (error) {
    console.error("Fetch error: ", error);
    return [];
  }
}
