const btns = document.querySelectorAll(".btn");
let couner1 = 0;
let couner2 = 0;
let couner3 = 0;

Array.from(btns).forEach(function (btn){
    btn.addEventListener('click', function (){
        if (this.id === "button1") {
            couner1 += 1;
            this.previousElementSibling.lastElementChild.innerText = couner1;
        }
        if (this.id === "button2") {
            couner2 += 1;
            this.previousElementSibling.lastElementChild.innerText = couner2;
        }
        if (this.id === "button3") {
            couner3 += 1;
            this.previousElementSibling.lastElementChild.innerText = couner3;
        }
    });
});