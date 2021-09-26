const navBar_barIcon = document.querySelector("nav");
const navBar_active = document.querySelector(".leftbar")
const navBar_logout = document.querySelector(".logout");
const menu__palette = document.querySelector(".menu__palette");
const menu_dropdown = document.querySelector(".dropdown");

navBar_barIcon.addEventListener("click",() => {
  navBar_active.classList.toggle("visible");
  navBar_barIcon.classList.toggle("visible");
})

menu_dropdown.addEventListener("click",() => {
  menu__palette.classList.toggle("visible");
  menu_dropdown.classList.toggle("dropUp");
})

const markdownIcon = document.querySelector(".mark");
const rate_bar = document.querySelector(".rate_2")
const percentage = document.querySelector(".percentage");

const rate_now = Number((rate_bar.style.width).replace("%",""));

markdownIcon.style.right = String(102-rate_now)+"%"
percentage.style.right = String(98-rate_now)+"%"
percentage.innerHTML = `${rate_now}%`
