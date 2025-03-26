function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.querySelector(".hamburger-icon").addEventListener("click", toggleMenu);
document
  .querySelectorAll(".menu-links a")
  .forEach((el) => el.addEventListener("click", toggleMenu));

function scrollToElementId(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
  });
  console.log("scrolling to", id);
}
