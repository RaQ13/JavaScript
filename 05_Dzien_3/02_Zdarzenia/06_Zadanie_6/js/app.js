const boxes = document.querySelectorAll(".box");

Array.from(boxes).forEach(function (box){
    box.addEventListener('click', function (){
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = randomColor;
    });
});