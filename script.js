const menuBar = document.querySelector("#menu-bar");
const navBar = document.querySelector(".navbar");

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("fa-times");
    navBar.classList.toggle("active");
  });
  
  document.addEventListener("scroll", () => {
    menuBar.classList.remove("fa-times");
    navBar.classList.remove("active");
  });
  