const buttons = Array.from(document.querySelectorAll('.btn'));

buttons.forEach(function (el){
   el.addEventListener('click', function (ev){
       if (this.previousElementSibling != null) {
           this.previousElementSibling.classList.toggle('hidden');
       }
   });
});
