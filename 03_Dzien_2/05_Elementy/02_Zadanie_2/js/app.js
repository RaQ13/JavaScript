const home = document.getElementById("home");
const children = document.querySelector(".offers").querySelectorAll("div, h2, p");
const ban = document.querySelector(".ban");
const someBlocks = document.querySelectorAll(".block");
const listElements = document.querySelector(".links").querySelectorAll("li");

console.log(home);
console.log(children); //node
console.log(ban);
console.log(someBlocks); //node
console.log(listElements); //node

function forNode (nodearray) {
    for (let i = 0; i < nodearray.length; i++) {
        console.log("tagi = " + nodearray[i].nodeName);
        Array.from(nodearray[i].classList).forEach(function (el){
            console.log("klasy = " + el);
        });
    }
}

forNode(children);
forNode(someBlocks);
forNode(listElements);