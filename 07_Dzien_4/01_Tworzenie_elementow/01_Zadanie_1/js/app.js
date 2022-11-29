const btns = Array.from(document.querySelectorAll(".btn"));

btns.forEach(function (el){
   el.addEventListener('click', function (ev){
      this.parentElement.parentElement.remove();
   });
});