// function toggleMenu() {
//   const menu = document.querySelector(".menu-links");
//   const icon = document.querySelector(".hamburger-icon");
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }

// document.querySelector(".hamburger-icon").addEventListener("click", toggleMenu);
// document
//   .querySelectorAll(".menu-links a")
//   .forEach((el) => el.addEventListener("click", toggleMenu));

// function scrollToElementId(id) {
//   document.getElementById(id).scrollIntoView({
//     behavior: "smooth",
//   });
// }
// function scrollToTop() {
//   document.body.scrollIntoView({
//     behavior: "smooth",
//   });
// }
// Smooth scroll to element by ID
function scrollToElementId(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// Smooth scroll to top
function scrollToTop() {
  document.body.scrollIntoView({ behavior: "smooth" });
}

// Add event listeners for all links with data-scroll
document.addEventListener("DOMContentLoaded", () => {
  // For scrolling to specific sections
  const scrollLinks = document.querySelectorAll("[data-scroll]");
  scrollLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("data-scroll");
      scrollToElementId(targetId);
    });
  });

  // For scrolling to top (if needed)
  const topLinks = document.querySelectorAll("[data-scroll-top]");
  topLinks.forEach((link) => {
    link.addEventListener("click", () => {
      scrollToTop();
    });
  });
});
