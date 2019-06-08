let mainNav = document.querySelector(".main-nav");
let toggleBtn = document.querySelector(".toggle-btn");
let icon = document.querySelector(".toggle-btn i");

console.log(mainNav);
console.log(toggleBtn);
console.log(icon);

toggleBtn.addEventListener("click", () => {
  if (!mainNav.classList.contains("open")) {
    mainNav.classList.add("open");
    icon.classList.add("fa-times");
    icon.classList.remove("fa-bars");
  } else {
    mainNav.classList.remove("open");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  }
});

window.addEventListener("scroll", () => {
  // const scrolled = window.scrollY;
  // console.log(scrolled);
  if (
    document.body.scrollTop > 50 ||
    (document.documentElement.scrollTop > 50 && window.innerWidth > 640)
  ) {
    document.querySelector(".main-header").classList.add("main-header__shrink");
  } else {
    document
      .querySelector(".main-header")
      .classList.remove("main-header__shrink");
  }
});
