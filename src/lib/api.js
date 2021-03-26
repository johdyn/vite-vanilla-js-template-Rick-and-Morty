export function fetchCharacters() {
  const url = "https://rickandmortyapi.com/api/character";

  // const promise = fetch(url);
  // const dataPromise = promise;
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
    .then((dataObject) => {
      // Work with the data
      console.log(dataObject);
      dataObject.results
        .forEach((character) => {
          const section = document.createElement("section");
          section.classList.add("characters");
          const main = document.querySelector("main");
          const fullName = document.createElement("h1");
          const image = document.createElement("img");
          image.src = character.image;
          image.alt = character.name;
          fullName.textContent = `${character.name}`;
          main.append(section);
          section.append(fullName);
          section.append(image);
        })
        .catch((error) => {
          console.log(error.toString());
          console.log(error);
        });
    });
}

export function clearCharacters() {
  const characterSections = document.querySelectorAll("section");
  characterSections.forEach((section) => characterSections.remove());
}
//           character.name
// const main = document.querySelector("main");
//     const person = document.createElement("section");
//   section.classList.add("person");
//   const h2 = document.createElement("h2");
//   const h3 = document.createElement("h3");
//   h2.textContent = `${person.name.title} ${person.name.first} ${person.name.last}`;
//   h3.textContent = `${person.gender}`;
//   if (h3.textContent.indexOf("female") === -1) {
//     h3.classList.toggle("female-color");
