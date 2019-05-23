let mainNav = document.querySelector(".main-nav");
let toggleBtn = document.querySelector(".toggle-btn");

console.log(mainNav);
console.log(toggleBtn);

toggleBtn.addEventListener("click", () => {
  if (!mainNav.classList.contains("open")) {
    mainNav.classList.add("open");
  } else {
    mainNav.classList.remove("open");
  }
});
