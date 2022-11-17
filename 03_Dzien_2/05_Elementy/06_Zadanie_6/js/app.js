const banner = document.querySelector(".ban");

function getClassInfo(element) {
    return Array.from(element.classList);
}

console.log(getClassInfo(banner));