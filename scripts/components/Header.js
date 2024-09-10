// function to build layout to header
export function Header() {
  const header = document.createElement("header");
  header.classList.add("header");
  header.ariaLabel = "En-tête de la page";

  const homepageLink = document.createElement("a");
  homepageLink.href = "index.html";

  const logo = document.createElement("img");
  logo.src = `assets/images/logo.png`;
  logo.alt = `fisheye logo`;
  logo.classList.add("logo");
  logo.ariaLabel =
    "Logo Fisheye écrit en toute lettre avec un appareil photo qui remplace le premier E";

  header.appendChild(homepageLink);
  homepageLink.appendChild(logo);

  const ourPhotographers = document.createElement("h1");
  ourPhotographers.textContent = "Nos photographes";
  ourPhotographers.ariaLabel = "titre Nos photographes";
  header.appendChild(ourPhotographers);

  return header;
}
