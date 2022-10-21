"use strict"; // Activate "strict mode" in JavaScript

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-controls", "menu");

  // Add click event listener to the menu toggle
  menuToggle.addEventListener("click", () => {
    if (menu.classList.contains("show")) {
      // Hide the menu
      menu.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
    } else {
      // Show the menu
      menu.classList.add("show");
      menuToggle.setAttribute("aria-expanded", "true");
    }
  });
}

// function menuToggleClick() {
//   console.log("Stop clicking me!! 😱")
// }
