const parents = document.querySelectorAll(".parent");
Array.from(parents).forEach(function (parent){
    parent.addEventListener('mouseover', function (){
        this.firstElementChild.style.display = "block";
    });
    parent.addEventListener('mouseout', function (parent){
       this.firstElementChild.style.display = "none";
    });
});