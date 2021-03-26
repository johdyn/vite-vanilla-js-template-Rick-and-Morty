import { fetchCharacters, clearCharacters } from "./lib/api.js";

const fetchButton = document.querySelector("button");

fetchButton.addEventListener("click", () => {
  clearCharacters();
  fetchCharacters();
});
