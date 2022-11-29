const containers = Array.from(document.querySelectorAll('.list-group'));

containers.forEach(function (el){
   el.addEventListener('pointerenter', function (ev){
       Array.from(this.children).forEach(function (el){
          el.style.background = "green";
       });
       this.firstElementChild.style.background = "red";
       this.lastElementChild.style.background = "blue";
   });
});
