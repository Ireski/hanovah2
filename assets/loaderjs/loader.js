// Loader
const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  loader.classList.remove("active");
  document.body.style.overflowY = "scroll";
});

// show loader immediately on page load start
loader.classList.add("active");
document.body.style.overflowY = "hidden";
