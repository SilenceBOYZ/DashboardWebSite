const toggleBtn = document.querySelector(".toggle");
const navBarMobile = document.querySelector(".navbar-mobile");
toggleBtn.onclick = () => {
  toggleBtn.classList.toggle("toggle__active");
  navBarMobile.classList.toggle("active__mobile");
}