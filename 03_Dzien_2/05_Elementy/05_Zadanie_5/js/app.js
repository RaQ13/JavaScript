const childElements = document.querySelector(".offers").querySelectorAll("div, h2, p");

function getTags(elements) {
    let array = [];
    Array.from(elements).forEach(function (el){
        array.push(el.tagName);
    })
    return array;
}

console.log(getTags(childElements));