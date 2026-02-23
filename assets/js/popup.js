document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("register-modal");
  const backdrop = document.getElementById("modal-backdrop");
  const panel = document.getElementById("modal-panel");
  const form = document.getElementById("registration-form");
  const closeBtn = document.getElementById("close-modal-btn");
  const statusDiv = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-btn");

  // --- CONFIGURATION ---
  // REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzD4QIZWt2WJgntKHNsbwFUydOJzLyfa35oLAX9xle_k8YPN1Kp0PfqyczRCDuA38goJg/exec";
  // ---------------------

  // Open Modal Function
  function openModal() {
    modal.classList.remove("hidden");
    // Trigger reflow
    void modal.offsetWidth;
    // Add enter classes
    backdrop.classList.add("opacity-100");
    backdrop.classList.remove("opacity-0");

    panel.classList.add("opacity-100", "translate-y-0", "scale-100");
    panel.classList.remove(
      "opacity-0",
      "translate-y-4",
      "sm:translate-y-0",
      "sm:scale-95",
    );
    document.body.style.overflow = "hidden";
    statusDiv.textContent = "";
  }

  // Close Modal Function
  function closeModal() {
    // Add leave classes
    backdrop.classList.remove("opacity-100");
    backdrop.classList.add("opacity-0");

    panel.classList.remove("opacity-100", "translate-y-0", "scale-100");
    panel.classList.add(
      "opacity-0",
      "translate-y-4",
      "sm:translate-y-0",
      "sm:scale-95",
    );

    setTimeout(() => {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }, 300);
  }

  //
  modal.addEventListener("click", (e) => {
    if (!panel.contains(e.target)) {
      panel.classList.remove("opacity-100", "translate-y-0", "scale-100");
      panel.classList.add(
        "opacity-0",
        "translate-y-4",
        "sm:translate-y-0",
        "sm:scale-95",
      );

      setTimeout(() => {
        modal.classList.add("hidden");
        document.body.style.overflow = "";
      }, 300);
    }
  });

  // Event Listeners for existing buttons
  // We'll attach this to any element with 'data-modal-target="register-modal"' or specific IDs
  // For now, let's also hook into any link/button that says "Register" or "Enroll" if they don't have custom logic
  // OR, easiest for the user: They just add the class 'open-register-modal' to any button they want to trigger this.

  // document.body.addEventListener("click", function (e) {
  //   if (
  //     e.target.closest(".open-register-modal") ||
  //     (e.target.textContent &&
  //       e.target.textContent.toLowerCase().includes("register now"))
  //   ) {
  //     e.preventDefault();
  //     openModal();
  //   }
  // });

  document.querySelectorAll(".openmodal").forEach((op) => {
    op.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(op);
    });
  });

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  // Form Submission
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (GOOGLE_SCRIPT_URL === "YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE") {
        alert("Please configure the Google Script URL in popup.js");
        return;
      }

      const formData = new FormData(form);
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting...";
      statusDiv.classList.add("hidden");
      statusDiv.className = "text-sm font-medium hidden"; // reset colors

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
            setTimeout(closeModal, 3000);
          } else {
            throw new Error(data.error);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          statusDiv.textContent =
            "Something went wrong. Please try again later.";
          statusDiv.classList.add("text-red-600");
          statusDiv.classList.remove("hidden");
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = "Submit";
        });
    });
  }
});

/*
              <!-- Register Modal -->
    <div
      id="register-modal"
      class="fixed inset-0 hidden"
      style="z-index: 9999"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <!-- Backdrop with inline style for background -->
      <div
        class="fixed inset-0 transition-opacity ease-out duration-300 opacity-0"
        id="modal-backdrop"
        style="background-color: rgba(0, 0, 0, 0.75)"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full md:my-8 sm:w-full md:max-w-lg opacity-0 translate-y-4 sm:translate-y-0 md:scale-95 ease-out duration-300"
            id="modal-panel"
          >
            <div class="bg-white px-4 pb-4 pt-5 md:p-6 md:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <h3
                    class="text-2xl text-center font-bold leading-6 text-gray-900 mb-6"
                    id="modal-title"
                  >
                    Register Now
                  </h3>
                  <form id="registration-form" class="space-y-4">
                    <div>
                      <label
                        for="name"
                        class="block text-sm font-medium text-gray-700"
                        >Full Name</label
                      >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                      />
                    </div>
                    <div>
                      <label
                        for="email"
                        class="block text-sm font-medium text-gray-700"
                        >Email Address</label
                      >
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                      />
                    </div>
                    <div>
                      <label
                        for="phone"
                        class="block text-sm font-medium text-gray-700"
                        >Phone Number</label
                      >
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                      />
                    </div>
                    <div>
                      <label
                        for="course"
                        class="block text-sm font-medium text-gray-700"
                        >Interested Course</label
                      >
                      <select
                        id="course"
                        name="course"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                      >
                        <option>Web Design</option>
                        <option>Frontend Development</option>
                        <option>Backend Development</option>
                        <option>Data Analysis</option>
                        <option>Cybersecurity</option>
                        <option>Graphics Design</option>
                        <option>UI/UX Design</option>
                        <option>Computer Basics</option>
                      </select>
                    </div>
                    <div>
                      <label
                        for="message"
                        class="block text-sm font-medium text-gray-700"
                        >Message (Optional)</label
                      >
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                      ></textarea>
                    </div>
                    <div
                      id="form-status"
                      class="hidden text-sm font-medium mb-2"
                    ></div>
                    <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                      <button
                        type="submit"
                        id="submit-btn"
                        class="inline-flex w-full justify-center rounded-md bg-[var(--primary)] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 sm:ml-3 sm:w-auto"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        id="close-modal-btn"
                        class="absolute top-[5%] left-[90%] font-bold text-[var(--secondary)] text-xl"
                      >
                        <i class="fa-solid fa-x"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
*/
