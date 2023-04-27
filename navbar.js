const theBody = document.querySelector("body");
const openNav = document.querySelector(".menu-bar button");
const closeNav = document.querySelector(".close-nav button");
const Navbar = document.querySelector(".navbar");
const map = document.getElementById("map");

function bodyScroll() {
  if (Navbar.classList.contains("show")) {
    theBody.classList.add("hide-scroll");
  } else if (theBody.classList.contains("hide-scroll")) {
    theBody.classList.remove("hide-scroll");
  }
}

function showHide() {
  Navbar.classList.toggle("show");
  bodyScroll();
  hideMap();
}

function showHide1() {
  Navbar.classList.toggle("show");
  bodyScroll();
  showMap();
}

function showMap() {
  let html = `
  <iframe
    frameborder="0"
    style="border: 2px solid black"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed/v1/view?key=AIzaSyC2kQfuFSpOvWEOmOPqqWpeOGD91kNLQIg&center=44.047546172925074,-91.64307448064426&zoom=16.5"
    allow="fullscreen"
  >
  </iframe>
`;
  map.innerHTML = html;
}

function hideMap() {
  map.innerHTML = "";
}

openNav.onclick = showHide;
closeNav.onclick = showHide1;
