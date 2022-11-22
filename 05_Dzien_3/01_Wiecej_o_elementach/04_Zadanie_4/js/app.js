/*
  Poniżej napisz kod rozwiązujący zadania
 */
const ul = document.querySelector(".exercise ul");
ul.classList.add("menu");

const li = document.querySelectorAll(".exercise ul li");
Array.from(li).forEach(function (el){
   el.classList.add("menuElement");
   el.classList.remove("error");
});