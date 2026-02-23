let formbox = document.getElementById("formbox");
let input1 = document.querySelector("#name");
let input2 = document.querySelector("#email");
let input3 = document.querySelector("#course");
let input4 = document.querySelector("#phone");
function displayForm() {
  document.querySelector("body").style.overflowY = "hidden";
  formbox.classList.add("opacity-100");
  formbox.classList.add("z-50");
  console.log("Hi");
}
function cancleFormBox() {
  document.querySelector("body").style.overflowY = "scroll";
  formbox.classList.remove("opacity-100");
  formbox.classList.add("opacity-0");
  formbox.classList.remove("z-50");
  formbox.classList.add("-z-50");
  input1.value = "";
  input2.value = "";
  input3.value = "";
  input4.value = "";
  console.log("Hi");
}

formbox.addEventListener("click", function (e) {
  if (e.target === formbox) {
    cancleFormBox();
  }
});
