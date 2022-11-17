const blocks = document.querySelectorAll(".block");
console.log(blocks);

Array.from(blocks).forEach(function (el){
   console.log(el.innerText);
   el.innerText = "Nowa wartość diva o klasie blocks";
   console.log(el.innerText);
});

