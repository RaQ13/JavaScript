const links = document.querySelector(".links").querySelectorAll("li");

function getDataInfo(elements) {
    let array = [];
    Array.from(elements).forEach(function (el){
        array.push(el.attributes[0].nodeValue);
    });
    return array;
}

console.log(getDataInfo(links));