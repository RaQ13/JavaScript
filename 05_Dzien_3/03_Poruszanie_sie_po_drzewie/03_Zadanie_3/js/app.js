const buttons = Array.from(document.querySelectorAll('.btn'));
console.log(buttons);

buttons.forEach(function (el){
   el.addEventListener('click', function (ev){
       const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
       this.parentElement.style.background = randomColor;
   });
});