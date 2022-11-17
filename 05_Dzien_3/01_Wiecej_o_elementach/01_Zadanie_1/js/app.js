const exercise = document.querySelector('.exercise ul');

Array.from(exercise.children).forEach(function (el, index){
    if (index % 2 !== 0) {
        el.style.backgroundColor = "#9e9e9e";
    }
    if (index === 4) {
        el.classList.add('big');
    }
    if ((index +1) % 3 === 0) {
        el.style.textDecoration = "underline";
    }
});