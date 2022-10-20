sayHello1(); //można wywołać funkcje przed deklaracją
function sayHello1(){
    console.log("Cześć");
}
sayHello1(); // można wywołać funkcje po deklaracji

// witaj(); nie można wywołąć przed deklaracja,
//hoisting nie działa z wyrażeniami funkcyjnymi
const witaj = function () {
    console.log("Witaj");
}
witaj(); // można wywołać po deklaracji