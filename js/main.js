let mobileNav = document.querySelector(".mobile-nav");
let toggleBtn = document.querySelector(".toggle-button");
let toggleBtnBar = document.querySelector(".toggle-button__bar");

toggleBtn.addEventListener("click", () => {
  if (!mobileNav.classList.contains("open")) {
    mobileNav.classList.add("open");
  } else {
    mobileNav.classList.remove("open");
  }
});
