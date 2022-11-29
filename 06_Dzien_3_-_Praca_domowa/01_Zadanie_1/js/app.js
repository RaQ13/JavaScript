const btns = Array.from(document.querySelectorAll('.btn'));

btns.forEach(function (el){
    el.addEventListener('click', function (ev){
       this.nextElementSibling.classList.toggle("d-none");
    });
});