export function fetchCharacters() {
  let url;
  const inputBox = document.querySelector(".search_field");
  const filterBox = document.querySelector(".select-box");
  const inputName = inputBox.value;
  const status = filterBox.value;
  console.log(status);
  console.log(inputName);
  if (status == "Alive") {
    url = `https://rickandmortyapi.com/api/character?name=${inputName}&status=alive`;
  } else if (status == "Dead") {
    url = `https://rickandmortyapi.com/api/character?name=${inputName}&status=dead`;
  } else if (status == "unknown") {
    url = `https://rickandmortyapi.com/api/character?name=${inputName}&status=unknown`;
  } else if (status == "All") {
    url = `https://rickandmortyapi.com/api/character?name=${inputName}`;
  }

  console.log(url);

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
      dataObject.results.forEach((character) => {
        const section = document.createElement("section");
        section.classList.add("characters");
        const main = document.querySelector("main");
        const fullName = document.createElement("h1");
        const image = document.createElement("img");
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper_class");
        image.classList.add("image_class");
        image.src = character.image;
        image.alt = character.name;
        fullName.textContent = `${character.name}`;

        if (character.status === "Alive") {
          section.style.backgroundColor = "blue";
        } else if (character.status === "Dead") {
          section.style.backgroundColor = "green";
        } else if (character.status === "unknown") {
          section.style.backgroundColor = "yellow";
        }
        main.append(section);
        section.append(wrapper);
        wrapper.append(fullName);
        wrapper.append(image);
      });
    })
    .catch((error) => {
      console.log(error.toString());
      console.log(error);
      alert("Cannot find URL");
    });
}

export function clearCharacters() {
  const characterSections = document.querySelectorAll("section");
  characterSections.forEach((section) => section.remove());
}
