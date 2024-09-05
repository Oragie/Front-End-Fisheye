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

  const dateLi = document.createElement("li");
  dateLi.classList.add("popularityLi");
  dateLi.alt = `Tri par date`;

  const titleLi = document.createElement("li");
  titleLi.classList.add("popularityLi");
  titleLi.alt = `Tri par titre`;

  sortBy.appendChild(textH2);
  sortBy.appendChild(sortByList);
  sortByList.appendChild(popularityLi);
  sortByList.appendChild(dateLi);
  sortByList.appendChild(titleLi);

  sortBy.addEventListener;
  return sortBy;
}
