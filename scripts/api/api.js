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
