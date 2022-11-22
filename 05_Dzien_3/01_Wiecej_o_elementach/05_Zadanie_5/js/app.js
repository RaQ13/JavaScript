/*
  Poniżej napisz kod rozwiązujący zadania
 */
let dataID = 1;
const elements = document.querySelectorAll(".exercise ul li");
Array.from(elements).forEach(function (el){
   el.dataset.id = dataID;
   dataID += 1;
});