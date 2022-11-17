const id = document.getElementById('menu');

function getDataInfo(element) {
    let array = [];
    Array.from(element.children).forEach(function (el){
        array.push(el.dataset.info);
    });
    return array;
}

console.log(getDataInfo(id));