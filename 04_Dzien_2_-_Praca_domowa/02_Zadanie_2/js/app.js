const id = document.getElementById('menu');

function getDataInfo(element) {
    let array = [];
    Array.from(element.children).forEach(function (el){
        array.push(el.dataset.info);
    });
    return array;
}

// console.log(getDataInfo(id));

const mainContainer = document.getElementById('main-container');

function getElementClass(element) {
    return Array.from(element.classList);
}

// console.log(getElementClass(mainContainer));

const colorPink = document.querySelector('.pink-color');

function getElementText(element) {
    return element.innerText;
}

// console.log(getElementText(colorPink));

const images = document.querySelectorAll('.images');

function getElementAlt(element) {
    let array = [];
    Array.from(element).forEach(function (el){
       array.push(el.alt);
    });
    return array;
}
console.log(getElementAlt(images));