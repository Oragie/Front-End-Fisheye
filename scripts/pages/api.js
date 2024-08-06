export async function fetchPhotographers() {
  try {
    const response = await fetch("../../data/photographers.json");
    const data = await response.json();
    return data.photographers;
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
  }
}
