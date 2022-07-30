const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle(
    "active"
  ); /* toggle will work like add and remove of the class active here. */
  input.focus(); /* this will give the focus to search bar when the search bar get expanded, that means start typing after clicking. */
});
