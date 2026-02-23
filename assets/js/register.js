document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const statusDiv = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-btn");

  // --- CONFIGURATION ---
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzD4QIZWt2WJgntKHNsbwFUydOJzLyfa35oLAX9xle_k8YPN1Kp0PfqyczRCDuA38goJg/exec";
  // ---------------------

  // Form Submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes("YOUR_GOOGLE_SCRIPT")) {
        alert("Configuration Error: Google Script URL is missing.");
        return;
    }

    const formData = new FormData(form);
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";
    
    // Reset status
    statusDiv.classList.add("hidden");
    statusDiv.className = "text-sm font-medium mb-4 text-center hidden"; 

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          statusDiv.textContent =
            "Registration successful! We will contact you soon.";
          statusDiv.classList.add("text-green-600");
          statusDiv.classList.remove("hidden");
          form.reset();
        } else {
          throw new Error(data.error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        statusDiv.textContent = "Something went wrong. Please try again later.";
        statusDiv.classList.add("text-red-600");
        statusDiv.classList.remove("hidden");
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit";
      });
  });
});
