const form = document.getElementById("contact-form");
const contactSuccess = document.getElementById("contact-success");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // stop redirect

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      contactSuccess.style.display = "flex";
      form.reset();
      form.style.display = "none";
    } else {
      form.style.display = "none";
      contactSuccess.style.display = "flex";
      contactSuccess.style.color = "red";
      contactSuccess.classList.add("bg-red-200");
      contactSuccess.innerHTML = "❌ Oops! Something went wrong.";
    }
  } catch (error) {
    form.style.display = "none";
    contactSuccess.style.display = "flex";
    contactSuccess.style.color = "red";
    contactSuccess.classList.add("bg-red-200");
    contactSuccess.innerHTML = "❌ Network error. Please try again.";
  }
});
