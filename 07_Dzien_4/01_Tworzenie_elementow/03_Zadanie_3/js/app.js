const btn = document.querySelector('.btn');
const menu = document.querySelector('#menu');


function addElemFn() {
    const clonedElem = menu.lastElementChild.cloneNode(true);
    let elemsCount = menu.children.length;
    clonedElem.innerText = `Element ${elemsCount + 1} - w chwili dodania było ${elemsCount} elementów`
    menu.appendChild(clonedElem);
}

btn.addEventListener('click', addElemFn);