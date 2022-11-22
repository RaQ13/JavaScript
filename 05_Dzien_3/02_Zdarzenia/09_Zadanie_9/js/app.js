const w = document.querySelector('#windowWidth');
const h = document.querySelector('#windowHeight');

window.addEventListener('resize', function (ev){
    w.innerText = innerWidth + "px";
    h.innerText = innerHeight + "px";
})
window.addEventListener('load', function (ev){
    w.innerText = innerWidth + "px";
    h.innerText = innerHeight + "px";
})