const wrapper = document.querySelector(".wrapper"),
  selectBtn = wrapper.querySelector(".select-btn"),
  searchInp = wrapper.querySelector("input"),
  options = wrapper.querySelector(".options");

const loadTourDiv = document.getElementById("loadButtonDiv");

let countries = [
  "Tree Tour",
  "Legume Family",
  "Grass Family",
  "Edible",
  "Medicinal",
  "Shakespeare Tree Tour",
  "Butterflies",
  "Birds",
  "Flowering Trees of WSU",
  "Cultivar Garden",
  "Bioswale #3",
  "Bioswale #1 & #2",
  "Bioswale #4",
  "Bioswale #5",
  "Younger Courtyard",
  "Kai Selection",
];

function addCountry(selectedCountry) {
  options.innerHTML = "";
  countries.forEach((country) => {
    let isSelected = country == selectedCountry ? "selected" : "";
    let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}
addCountry();

function updateName(selectedLi) {
  searchInp.value = "";
  addCountry(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
  let test = `
  <div id='loadButtonDiv'>
    <a href="treeFinder.html">
    <button class="loadTourButton">Load Tour</button>
    </a>
  </div>`;
  loadTourDiv.innerHTML = test;
}

searchInp.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInp.value.toLowerCase();
  arr = countries
    .filter((data) => {
      return data.toLowerCase().startsWith(searchWord);
    })
    .map((data) => {
      let isSelected =
        data == selectBtn.firstElementChild.innerText ? "selected" : "";
      return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    })
    .join("");
  options.innerHTML = arr
    ? arr
    : `<p style="margin-top: 10px;">Oops! Tree tour not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
