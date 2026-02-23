let aside = document.querySelector("aside");
let dark = document.querySelector("#dark");
let barMenu = document.querySelector("#bar-menu");
let x2 = document.querySelector("#x");

barMenu.addEventListener("click", () => {
  aside.classList.toggle("slid");
  dark.classList.toggle("dark");
});
x2.addEventListener("click", () => {
  aside.classList.toggle("slid");
  dark.classList.toggle("dark");
});

const box1 = document.querySelector(".box1");
if (box1) {
  let targetX1 = 0,
    targetY1 = 0;
  let currentX1 = 0,
    currentY1 = 0;

  document.addEventListener("mousemove", (e) => {
    const dx = (e.clientX / window.innerWidth) * 2 - 1;
    const dy = (e.clientY / window.innerHeight) * 2 - 1;

    targetX1 = dx * -50;
    targetY1 = dy * -50;
  });

  // animation loop
  function animate1() {
    currentX1 += (targetX1 - currentX1) * 0.1;
    currentY1 += (targetY1 - currentY1) * 0.1;

    box1.style.transform = `translate(${currentX1}px, ${currentY1}px)`;
    requestAnimationFrame(animate1);
  }
  animate1();
}

const box2 = document.querySelector(".box2");
if (box2) {
  let targetX2 = 0,
    targetY2 = 0;
  let currentX2 = 0,
    currentY2 = 0;

  document.addEventListener("mousemove", (e) => {
    const dx = (e.clientX / window.innerWidth) * 2 - 1;
    const dy = (e.clientY / window.innerHeight) * 2 - 1;

    targetX2 = dx * -50;
    targetY2 = dy * -50;
  });

  // animation loop
  function animate2() {
    currentX2 += (targetX2 - currentX2) * 0.1;
    currentY2 += (targetY2 - currentY2) * 0.1;

    box2.style.transform = `translate(${currentX2}px, ${currentY2}px)`;
    requestAnimationFrame(animate2);
  }
  animate2();
}

const box3 = document.querySelector(".box3");
if (box3) {
  let targetX3 = 0,
    targetY3 = 0;
  let currentX3 = 0,
    currentY3 = 0;

  document.addEventListener("mousemove", (e) => {
    const dx = (e.clientX / window.innerWidth) * 2 - 1;
    const dy = (e.clientY / window.innerHeight) * 2 - 1;

    targetX3 = dx * -50;
    targetY3 = dy * -50;
  });

  // animation loop
  function animate3() {
    currentX3 += (targetX3 - currentX3) * 0.1;
    currentY3 += (targetY3 - currentY3) * 0.1;

    box3.style.transform = `translate(${currentX3}px, ${currentY3}px)`;
    requestAnimationFrame(animate3);
  }
  animate3();
}

// Header Hide
const black = document.querySelector("#black");
const white = document.querySelector("#white");

window.addEventListener("scroll", () => {
  black.classList.toggle("opacity-0", window.scrollY > 50);
  black.classList.toggle("-translate-y-4", window.scrollY > 50);
  black.classList.toggle("pointer-events-none", window.scrollY > 50);
  white.classList.toggle("-translate-y-14", window.scrollY > 50);
});

// Splide Js

const splideEl = document.querySelector(".splide");

document.addEventListener("DOMContentLoaded", function () {
  if (splideEl) {
    var splide = new Splide(".splide", {
      type: "loop",
      // height: "15rem",
      width: "50rem",
      perPage: 2,
      autoplay: "play",
      pauseOnHover: false,
      pagination: false,
      arrows: false,
      gap: "1.5rem",
      breakpoints: {
        640: {
          // height: "12rem",
          gap: "0rem",
          width: "24rem",
          perPage: 1,
        },
      },
    });
    splide.mount();
  }
});

// Active Menu Item
const currentPath = window.location.pathname.replace(/\/$/, "");

document.querySelectorAll(".men").forEach((link) => {
  const linkPath = new URL(link.href).pathname.replace(/\/$/, "");
  link.classList.add("text-[var(--secondary)]");

  if (linkPath === currentPath) {
    link.classList.remove("text-[var(--secondary)]");
    link.classList.add("text-[var(--primary)]");
    console.log("Active link:", link.getAttribute("href"));
  }
});

// Tabs
let tabs = document.querySelectorAll(".tab");
let tabContents = document.querySelectorAll(".tab-content");

if (tabs) {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((tb) => {
        tb.classList.remove("active");
      });
      tab.classList.add("active");

      let tabl = tab.getAttribute("data-tab");
      tabContents.forEach((tbc) => {
        tbc.classList.add("hidden");
        if (tbc.id == tabl) {
          tbc.classList.remove("hidden");
        }
      });
    });
  });
}

// details
const allDetails = document.querySelectorAll("details");

allDetails.forEach((details) => {
  details.addEventListener("toggle", () => {
    if (details.open) {
      allDetails.forEach((other) => {
        if (other !== details) {
          other.removeAttribute("open");
        }
      });
    }
  });
});

let dropDown = document.getElementById("course-drop");
let dropDownContent = document.getElementById("course-drop-content");

dropDown.addEventListener("click", () => {
  dropDownContent.classList.toggle("hidden");
  dropDownContent.classList.toggle("grid");
});

let dataDropDown = document.getElementById("data-drop");
let dataDropDownContent = document.getElementById("data-drop-content");

dataDropDown.addEventListener("click", () => {
  dataDropDownContent.classList.toggle("hidden");
  dataDropDownContent.classList.toggle("grid");
});

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };

// Contact Form
/*
 <div class="max-w-lg mx-auto">

  <!-- Contact Form -->
  <form
    id="contact-form"
    action="https://formspree.io/f/CONTACT_FORM_ID"
    method="POST"
    class="bg-white p-6 rounded-lg shadow space-y-4"
  >
    <h2 class="text-2xl font-bold text-gray-800">Contact Us</h2>

    <input
      type="text"
      name="name"
      required
      placeholder="Your Name"
      class="w-full rounded border-gray-300 p-2"
    />

    <input
      type="email"
      name="email"
      required
      placeholder="Your Email"
      class="w-full rounded border-gray-300 p-2"
    />

    <textarea
      name="message"
      required
      placeholder="Your Message"
      class="w-full rounded border-gray-300 p-2"
    ></textarea>

    <button
      type="submit"
      class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
    >
      Send Message
    </button>
  </form>

  <!-- Thank You Message -->
  <div
    id="contact-success"
    class="hidden bg-green-100 text-green-700 p-6 rounded-lg text-center"
  >
    <h3 class="text-xl font-semibold">Thank you! 🎉</h3>
    <p class="mt-2">
      Your message has been sent. We’ll get back to you shortly.
    </p>
  </div>
</div>

<script>
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("contact-success");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.classList.add("hidden");
      successMessage.classList.remove("hidden");
      form.reset();
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  });
</script>
 
*/

// Reg form
/*
 <form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow space-y-4"
>
  <h2 class="text-2xl font-bold text-gray-800">
    Course Registration
  </h2>

  <!-- Full Name -->
  <div>
    <label class="block text-sm font-medium text-gray-700">
      Full Name
    </label>
    <input
      type="text"
      name="name"
      required
      class="mt-1 w-full rounded border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      placeholder="John Doe"
    />
  </div>

  <!-- Email -->
  <div>
    <label class="block text-sm font-medium text-gray-700">
      Email Address
    </label>
    <input
      type="email"
      name="email"
      required
      class="mt-1 w-full rounded border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      placeholder="john@example.com"
    />
  </div>

  <!-- Course Selection -->
  <div>
    <label class="block text-sm font-medium text-gray-700">
      Select Course
    </label>
    <select
      name="course"
      required
      class="mt-1 w-full rounded border-gray-300 focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="">-- Choose a course --</option>
      <option value="Web Development">Web Development</option>
      <option value="Data Science">Data Science</option>
      <option value="Cybersecurity">Cybersecurity</option>
      <option value="Cloud Computing">Cloud Computing</option>
      <option value="UI/UX Design">UI/UX Design</option>
    </select>
  </div>

  <!-- Phone (optional) -->
  <div>
    <label class="block text-sm font-medium text-gray-700">
      Phone Number (optional)
    </label>
    <input
      type="tel"
      name="phone"
      class="mt-1 w-full rounded border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      placeholder="+1 234 567 890"
    />
  </div>

  <!-- Hidden redirect after success -->
  <input
    type="hidden"
    name="_redirect"
    value="https://yourdomain.com/success.html"
  />

  <!-- Submit Button -->
  <button
    type="submit"
    class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
  >
    Register Now
  </button>
</form>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Registration Successful</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex items-center justify-center min-h-screen bg-gray-100">
  <div class="bg-white p-8 rounded-lg shadow text-center">
    <h1 class="text-2xl font-bold text-green-600">
      🎉 Registration Successful!
    </h1>
    <p class="mt-4 text-gray-700">
      Thank you for registering. We’ll contact you soon with more details.
    </p>

    <a
      href="/"
      class="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Back to Home
    </a>
  </div>
</body>
</html>

 */

// Main Course Form
/*
<form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-xl space-y-11 py-14"
          >
            <h2 class="text-2xl font-bold text-gray-800">
              Course Registration
            </h2>

            <!-- Full Name -->
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                class="mt-1 w-full rounded border-b-2 p-3 border-gray-300 focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                class="mt-1 w-full rounded border-b-2 p-3 border-gray-300 focus:outline-none"
                placeholder="john@example.com"
              />
            </div>

            <!-- Course Selection -->
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Select Course
              </label>
              <select
                name="course"
                required
                class="mt-1 w-full rounded border-b-2 p-3 border-gray-300 focus:outline-none"
              >
                <option value="">-- Choose a course --</option>
                <option value="Data Analysis">Data Analysis</option>
                <option value="Frontend Development">
                  Frontend Development
                </option>
                <option value="Backend Development">Backend Development</option>
                <option value="Graphics Design">Graphics Design</option>
                <option value="Web Design">Web Design</option>
                <option value="Product Design">Product Design</option>
                <option value="Computer Appreciation">
                  Computer Appreciation
                </option>
                <option value="Virtual Assistance">Virtual Assistance</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
            </div>

            <!-- Phone -->
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                class="mt-1 w-full rounded border-b-2 p-3 border-gray-300 focus:outline-none"
                placeholder="+1 234 567 890"
              />
            </div>

            <!-- Hidden redirect after success -->
            <input
              type="hidden"
              name="_redirect"
              value="https://yourdomain.com/success.html"
            />

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full bg-[#1ab69d] text-white py-2 rounded-md hover:bg-[#159983] transition cursor-pointer"
            >
              Register Now
            </button>
          </form> 
*/

/*
    <!-- Instructors Section  -->
     <section class="w-full">
      <div class="max-w-[1200px] mx-auto px-4 pt-12 pb-28 flex flex-col items-center justify-center">
          <h4 class="text-sm font-semibold mb-2 text-[#] text-[var(--ash)]">INSTRUCTORS</h4>
          <h4 class="text-2xl lg:text-4xl text-[var(--secondary)] font-bold mb-12 text-center">Course Instructors</h4>
          <!-- Laptop Instructors -->
           <div class="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
            <!-- Instructor -->
            <div class="flex flex-col items-center justify-center">
              <div class="group relative rounded-2xl overflow-hidden h-[350px] lg:h-[300px] w-[300px] lg:w-[250px] bg-[url('../images/imgi_29_team-01.webp')] bg-cover bg-center">
                <!-- <img src="images/imgi_29_team-01.webp" alt="" class="h-full w-full rounded-2xl"> -->
                <div class="absolute top-0 bottom-0 left-0 right-0 bg-[var(--bg)] translate-y-[500px] group-hover:translate-y-0 transition-all duration-700 ease-in-out p-4">
                  <!-- Socials -->
                  <div class="flex flex-col gap-2 items-end">
                    <a href="#" class="text-white border-2 border-white rounded-full p-[3px] hover:bg-white hover:text-[var(--primary)] transition-all duration-700 ease-in-out"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="text-white border-2 border-white rounded-full p-[3px] hover:bg-white hover:text-[var(--primary)] transition-all duration-700 ease-in-out"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#" class="text-white border-2 border-white rounded-full p-[3px] hover:bg-white hover:text-[var(--primary)] transition-all duration-700 ease-in-out"><i class="fa-brands fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
              <h1 class="font-semibold text-xl my-1">Mary Slessor</h1>
              <p>Data Analyst</p>
            </div>
            <!-- Instructor -->
            <div class="flex flex-col items-center justify-center">
              <div class="group relative rounded-2xl overflow-hidden h-[350px] lg:h-[300px] w-[300px] lg:w-[250px] bg-[url('../images/imgi_30_team-02.webp')] bg-cover bg-center">
                <!-- <img src="images/imgi_29_team-01.webp" alt="" class="h-full w-full rounded-2xl"> -->
                <div class="absolute top-0 bottom-0 left-0 right-0 bg-[var(--bg)] translate-y-[500px] group-hover:translate-y-0 transition-all duration-700 ease-in-out p-4">
                  <!-- Socials -->
                  <div class="flex flex-col gap-2 items-end">
                    <a href="#" class="text-white border-2 border-white rounded-full p-[3px] hover:bg-white hover:text-[var(--primary)] transition-all duration-700 ease-in-out"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="text-white border-2 border-white rounded-full p-[3px] hover:bg-white hover:text-[var(--primary)] transition-all duration-700 ease-in-out"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#" class="text-white border-2 border-white rounded-full p-[3px] hover:bg-white hover:text-[var(--primary)] transition-all duration-700 ease-in-out"><i class="fa-brands fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
              <h1 class="font-semibold text-xl my-1">John Paul</h1>
              <p>Frontend Developer</p>
            </div>
            <!-- Instructor -->
            <div class="flex flex-col items-center justify-center">
              <div class="group relative rounded-2xl overflow-hidden h-[350px] lg:h-[300px] w-[300px] lg:w-[250px] bg-[url('../images/imgi_31_team-03.webp')] bg-cover bg-center">
                <!-- <img src="images/imgi_29_team-01.webp" alt="" class="h-full w-full rounded-2xl"> -->
                <div class="absolute top-0 bottom-0 left-0 right-0 bg-[var(--bg)] translate-y-[500px] group-hover:translate-y-0 transition-all duration-700 ease-in-out p-4">
                  <!-- Socials -->
                  <div class="flex flex-col gap-2 items-end">
                    <a href="#" class="text-white border-2 border-white rounded-full p-[3px] hover:bg-white hover:text-[var(--primary)] transition-all duration-700 ease-in-out"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="text-white border-2 border-white rounded-full p-[3px] hover:bg-white hover:text-[var(--primary)] transition-all duration-700 ease-in-out"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#" class="text-white border-2 border-white rounded-full p-[3px] hover:bg-white hover:text-[var(--primary)] transition-all duration-700 ease-in-out"><i class="fa-brands fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
              <h1 class="font-semibold text-xl my-1">Joy Amanda</h1>
              <p>Graphics Designer</p>
            </div>
            <!-- Instructor -->
            <div class="flex flex-col items-center justify-center">
              <div class="group relative rounded-2xl overflow-hidden h-[350px] lg:h-[300px] w-[300px] lg:w-[250px] bg-[url('../images/imgi_32_team-04.webp')] bg-cover bg-center">
                <!-- <img src="images/imgi_29_team-01.webp" alt="" class="h-full w-full rounded-2xl"> -->
                <div class="absolute top-0 bottom-0 left-0 right-0 bg-[var(--bg)] translate-y-[500px] group-hover:translate-y-0 transition-all duration-700 ease-in-out p-4">
                  <!-- Socials -->
                  <div class="flex flex-col gap-2 items-end">
                    <a href="#" class="text-white border-2 border-white rounded-full p-[3px] hover:bg-white hover:text-[var(--primary)] transition-all duration-700 ease-in-out"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="text-white border-2 border-white rounded-full p-[3px] hover:bg-white hover:text-[var(--primary)] transition-all duration-700 ease-in-out"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#" class="text-white border-2 border-white rounded-full p-[3px] hover:bg-white hover:text-[var(--primary)] transition-all duration-700 ease-in-out"><i class="fa-brands fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
              <h1 class="font-semibold text-xl my-1">Andre Harrison</h1>
              <p>Cybersecurity Expert</p>
            </div>
           </div>
           <!-- Mobile Instructors -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:hidden">
              <!-- Mobile Instructor -->
            <div class="flex flex-col items-center justify-center">
              <div class="relative rounded-2xl overflow-hidden h-[350px] lg:h-[300px] w-[300px] lg:w-[250px] bg-[url('../images/imgi_29_team-01.webp')] bg-cover bg-center">
              </div>
              <h1 class="font-semibold text-xl my-1">Mary Slessor</h1>
              <p>Data Analyst</p>
              <!-- Socials -->
                  <div class="flex gap-5 mt-3">
                    <a href="#" class="text-[var(--primary)] border-2 border-[var(--primary)] rounded-full p-[3px] hover:bg-[var(--primary)] hover:text-white transition-all duration-700 ease-in-out"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="text-[var(--primary)] border-2 border-[var(--primary)] rounded-full p-[3px] hover:bg-[var(--primary)] hover:text-white transition-all duration-700 ease-in-out"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#" class="text-[var(--primary)] border-2 border-[var(--primary)] rounded-full p-[3px] hover:bg-[var(--primary)] hover:text-white transition-all duration-700 ease-in-out"><i class="fa-brands fa-linkedin-in"></i></a>
                  </div>
            </div>
              <!-- Mobile Instructor -->
            <div class="flex flex-col items-center justify-center">
              <div class="relative rounded-2xl overflow-hidden h-[350px] lg:h-[300px] w-[300px] lg:w-[250px] bg-[url('../images/imgi_30_team-02.webp')] bg-cover bg-center">
              </div>
              <h1 class="font-semibold text-xl my-1">John Paul</h1>
              <p>Data Analyst</p>
              <!-- Socials -->
                  <div class="flex gap-5 mt-3">
                    <a href="#" class="text-[var(--primary)] border-2 border-[var(--primary)] rounded-full p-[3px] hover:bg-[var(--primary)] hover:text-white transition-all duration-700 ease-in-out"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="text-[var(--primary)] border-2 border-[var(--primary)] rounded-full p-[3px] hover:bg-[var(--primary)] hover:text-white transition-all duration-700 ease-in-out"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#" class="text-[var(--primary)] border-2 border-[var(--primary)] rounded-full p-[3px] hover:bg-[var(--primary)] hover:text-white transition-all duration-700 ease-in-out"><i class="fa-brands fa-linkedin-in"></i></a>
                  </div>
            </div>
              <!-- Mobile Instructor -->
            <div class="flex flex-col items-center justify-center">
              <div class="relative rounded-2xl overflow-hidden h-[350px] lg:h-[300px] w-[300px] lg:w-[250px] bg-[url('../images/imgi_31_team-03.webp')] bg-cover bg-center">
              </div>
              <h1 class="font-semibold text-xl my-1">Joy Amanda</h1>
              <p>Data Analyst</p>
              <!-- Socials -->
                  <div class="flex gap-5 mt-3">
                    <a href="#" class="text-[var(--primary)] border-2 border-[var(--primary)] rounded-full p-[3px] hover:bg-[var(--primary)] hover:text-white transition-all duration-700 ease-in-out"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="text-[var(--primary)] border-2 border-[var(--primary)] rounded-full p-[3px] hover:bg-[var(--primary)] hover:text-white transition-all duration-700 ease-in-out"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#" class="text-[var(--primary)] border-2 border-[var(--primary)] rounded-full p-[3px] hover:bg-[var(--primary)] hover:text-white transition-all duration-700 ease-in-out"><i class="fa-brands fa-linkedin-in"></i></a>
                  </div>
            </div>
              <!-- Mobile Instructor -->
            <div class="flex flex-col items-center justify-center">
              <div class="relative rounded-2xl overflow-hidden h-[350px] lg:h-[300px] w-[300px] lg:w-[250px] bg-[url('../images/imgi_32_team-04.webp')] bg-cover bg-center">
              </div>
              <h1 class="font-semibold text-xl my-1">Andre Harrison/h1>
              <p>Data Analyst</p>
              <!-- Socials -->
                  <div class="flex gap-5 mt-3">
                    <a href="#" class="text-[var(--primary)] border-2 border-[var(--primary)] rounded-full p-[3px] hover:bg-[var(--primary)] hover:text-white transition-all duration-700 ease-in-out"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="text-[var(--primary)] border-2 border-[var(--primary)] rounded-full p-[3px] hover:bg-[var(--primary)] hover:text-white transition-all duration-700 ease-in-out"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#" class="text-[var(--primary)] border-2 border-[var(--primary)] rounded-full p-[3px] hover:bg-[var(--primary)] hover:text-white transition-all duration-700 ease-in-out"><i class="fa-brands fa-linkedin-in"></i></a>
                  </div>
            </div>
            </div>
      </div>
     </section>
*/
