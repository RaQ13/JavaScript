const box = document.querySelector('.box');
const globalx = document.querySelector('#globalX');
const globaly = document.querySelector('#globalY');
const localx = document.querySelector('#localX');
const localy = document.querySelector('#localY');

box.addEventListener('mousemove', function (ev){
    globalx.innerText = ev.clientX;
    globaly.innerText = ev.clientY;
    localx.innerText = ev.offsetX;
    localy.innerText = ev.offsetY;
})