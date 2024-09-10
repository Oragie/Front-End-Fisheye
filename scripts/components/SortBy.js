// function to build layout to sort by list
export function SortBy(title, likes, date) {
  const sortBy = document.createElement("div");
  sortBy.classList.add("sortBy");

  const textH2 = document.createElement("h2");
  textH2.textContent = "Trier par";

  const sortByList = document.createElement("ul");

  const popularityLi = document.createElement("li");
  popularityLi.classList.add("popularityLi");
  popularityLi.alt = `Tri par popularité`;
  popularityLi.textContent = "Popularité";

  const dateLi = document.createElement("li");
  dateLi.classList.add("dateLi");
  dateLi.alt = `Tri par date`;
  dateLi.textContent = "Date";

  const titleLi = document.createElement("li");
  titleLi.classList.add("titleLi");
  titleLi.alt = `Tri par titre`;
  titleLi.textContent = "Titre";

  sortBy.appendChild(textH2);
  sortBy.appendChild(sortByList);
  sortByList.appendChild(popularityLi);
  sortByList.appendChild(dateLi);
  sortByList.appendChild(titleLi);

  sortBy.addEventListener;
  return sortBy;
}
