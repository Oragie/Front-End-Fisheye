// function to build layout to header
export function Header() {
  const header = document.createElement("header");

  const homepageLink = document.createElement("a");
  homepageLink.href = "index.html";

  const logo = document.createElement("img");
  logo.src = `assets/images/logo.png`;
  logo.alt = `fisheye logo`;
  logo.classList.add("logo");

  header.appendChild(homepageLink);
  homepageLink.appendChild(logo);

  header.addEventListener;
  return header;
}
