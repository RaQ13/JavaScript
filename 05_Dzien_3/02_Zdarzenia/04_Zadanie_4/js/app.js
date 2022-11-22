const counter = document.querySelector(".counter");
const buttons = document.querySelectorAll(".btn");
let counterValue = 0;

// Array.from(buttons).forEach(function (btn){
//    btn.addEventListener('click', function (){
//       counterValue += 1;
//       counter.innerText = counterValue;
//    });
// });

function count() {
    counterValue += 1;
    counter.innerText = counterValue;
}

Array.from(buttons).forEach(function (btn){
   btn.addEventListener('click', count);
});