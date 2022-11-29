const list1 = document.querySelector('#list1');
const list2 = document.querySelector('#list2');
const cols = Array.from(document.querySelectorAll('.col'));

cols.forEach(function (el){
   el.addEventListener('mouseover', function (ev){
       const elems = Array.from(document.querySelectorAll('.list-group-item'));
       elems.forEach(function (el){
           el.addEventListener('click', function (ev){
               ev.preventDefault();
               if (this.parentElement.id === "list1") {
                   list2.appendChild(this.cloneNode(true));
               }
               if (this.parentElement.id === "list2") {
                   list1.appendChild(this.cloneNode(true));
               }
               this.remove();
           });
       });
   });
});
