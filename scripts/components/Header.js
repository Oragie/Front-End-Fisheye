// function to build layout to header
export function Header() {
  const header = document.createElement("header");
  header.classList.add("header");

  const homepageLink = document.createElement("a");
  homepageLink.href = "index.html";
  homepageLink.ariaLabel = "Fisheye home page";

  const logo = document.createElement("img");
  logo.src = `assets/images/logo.png`;
  logo.alt = `Fisheye home page`;
  logo.classList.add("logo");

  header.appendChild(homepageLink);
  homepageLink.appendChild(logo);

  const ourPhotographers = document.createElement("h1");
  ourPhotographers.textContent = "Nos photographes";
  ourPhotographers.ariaLabel = "titre Nos photographes";
  header.appendChild(ourPhotographers);

  return header;
}
