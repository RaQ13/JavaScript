const remove = document.querySelector('#remove');
const list = document.querySelector('#list');

remove.addEventListener('click', function (ev){
    Array.from(list.children).forEach(function (el){
       el.remove();
    });
});s